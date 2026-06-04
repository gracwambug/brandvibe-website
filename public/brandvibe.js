/* BrandVibe — Main JavaScript */

// ── SCROLL NAV SHADOW ──
window.addEventListener('scroll', function() {
  var nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── COUNTER ANIMATION ──
function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

function animateCounter(el) {
  if (el.dataset.done === 'true') return;
  el.dataset.done = 'true';
  var target = parseInt(el.dataset.target);
  var suffix = el.dataset.suffix || '';
  var steps = 60;
  var step = 0;
  var timer = setInterval(function() {
    step++;
    var val = Math.round(easeOut(step / steps) * target);
    el.textContent = val + suffix;
    if (step >= steps) { el.textContent = target + suffix; clearInterval(timer); }
  }, 1800 / steps);
}

function initCounters() {
  var counters = document.querySelectorAll('[data-target]');
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) animateCounter(entry.target);
    });
  }, { threshold: 0.4 });
  counters.forEach(function(c) { c.dataset.done = ''; observer.observe(c); });
}

// ── FILTER TABS ──
function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(function(tab) {
    if (tab.dataset.bound === '1') return;
    tab.dataset.bound = '1';
    tab.addEventListener('click', function() {
      tab.closest('.filter-tabs').querySelectorAll('.filter-tab').forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
    });
  });
}

// ── ANALYTICS: track key button clicks ──
function trackEvent(name, props) {
  try {
    if (window.plausible) window.plausible(name, props ? { props: props } : undefined);
  } catch (e) {}
  try {
    if (window.gtag) {
      var key = String(name).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
      window.gtag('event', key, props || {});
    }
  } catch (e) {}
}

function initAnalyticsTracking() {
  document.querySelectorAll('a.btn-primary, a.btn-secondary, a.btn-outline, a.btn-white, a.nav-cta').forEach(function(a) {
    if (a.dataset.tracked === '1') return;
    a.dataset.tracked = '1';
    a.addEventListener('click', function() {
      var label = (a.textContent || '').trim();
      var href = a.getAttribute('href') || '';
      trackEvent('CTA Click', { label: label.slice(0, 60), href: href });
      var l = label.toLowerCase();
      if (/strategy|consult|book|schedule/.test(l)) trackEvent('strategy_call_click', { label: label.slice(0,60), href: href });
      if (/package|pricing|plan|retainer/.test(l)) trackEvent('package_inquiry', { label: label.slice(0,60) });
      if (href.indexOf('/portfolio') === 0) trackEvent('portfolio_view', { href: href });
      if (href.indexOf('/blog') === 0) trackEvent('blog_read', { href: href });
    });
  });
}

// ── CALENDLY MODAL ──
var CALENDLY_URL = 'https://calendly.com/brandvibe-info-pvv_/30min';
var _calendlyLoadTimer = null;
function openCalendly(source) {
  var modal = document.getElementById('calendly-modal');
  var iframe = document.getElementById('calendly-iframe');
  var loading = document.getElementById('calendly-loading');
  var err = document.getElementById('calendly-error');
  if (!modal || !iframe) { window.open(CALENDLY_URL, '_blank'); return; }
  if (err) err.style.display = 'none';
  if (loading) loading.style.display = 'flex';
  // Always (re)assign src so it loads fresh each open
  var target = CALENDLY_URL + '?hide_gdpr_banner=1&embed_type=Inline&embed_domain=' + encodeURIComponent(location.hostname);
  if (iframe.src !== target) {
    iframe.src = target;
  } else if (loading) {
    // Already loaded — hide spinner immediately
    loading.style.display = 'none';
  }
  iframe.onload = function () {
    if (loading) loading.style.display = 'none';
    if (_calendlyLoadTimer) { clearTimeout(_calendlyLoadTimer); _calendlyLoadTimer = null; }
  };
  // Fallback: if not loaded in 8s, show error UI
  if (_calendlyLoadTimer) clearTimeout(_calendlyLoadTimer);
  _calendlyLoadTimer = setTimeout(function () {
    // If still loading, show fallback
    if (loading && loading.style.display !== 'none') {
      loading.style.display = 'none';
      if (err) err.style.display = 'flex';
    }
  }, 8000);
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  trackEvent('calendly_open', { source: source || 'unknown' });
  trackEvent('calendly_booking_started', { source: source || 'unknown' });
  trackEvent('strategy_session_click', { source: source || 'unknown' });
  trackEvent('strategy_call_click', { source: source || 'unknown' });
}
function closeCalendly() {
  var modal = document.getElementById('calendly-modal');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = '';
  if (_calendlyLoadTimer) { clearTimeout(_calendlyLoadTimer); _calendlyLoadTimer = null; }
}
window.openCalendly = openCalendly;
window.closeCalendly = closeCalendly;

function initCalendly() {
  document.querySelectorAll('[data-calendly-open]').forEach(function(el) {
    if (el.dataset.cvBound === '1') return;
    el.dataset.cvBound = '1';
    el.addEventListener('click', function(e) {
      e.preventDefault();
      openCalendly((el.textContent || '').trim().slice(0, 40));
    });
  });
  var closeBtn = document.getElementById('calendly-close');
  if (closeBtn && closeBtn.dataset.cvBound !== '1') {
    closeBtn.dataset.cvBound = '1';
    closeBtn.addEventListener('click', closeCalendly);
  }
  var modal = document.getElementById('calendly-modal');
  if (modal && modal.dataset.cvBound !== '1') {
    modal.dataset.cvBound = '1';
    modal.addEventListener('click', function(e) { if (e.target === modal) closeCalendly(); });
  }
  if (!window._cvEscBound) {
    window._cvEscBound = true;
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeCalendly(); });
  }
  if (!window._cvMsgBound) {
    window._cvMsgBound = true;
    window.addEventListener('message', function(e) {
      if (e.data && typeof e.data.event === 'string' && e.data.event.indexOf('calendly.event_scheduled') === 0) {
        trackEvent('strategy_session_booked');
        trackEvent('calendly_booking_completed');
      }
    });
  }
}

// ── CHATBOT ──
function toggleChatbot() {
  var body = document.getElementById('chatbot-body');
  if (!body) return;
  var isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'flex';
  var icon = document.getElementById('chatbot-toggle-icon');
  if (icon) icon.textContent = isOpen ? 'Chat' : 'x';
  var btn = document.getElementById('chatbot-toggle-btn');
  if (btn) {
    btn.style.fontSize = isOpen ? '12px' : '22px';
    btn.style.fontWeight = isOpen ? '700' : '300';
  }
}
window.toggleChatbot = toggleChatbot;

function sendChatMessage() {
  var input = document.getElementById('chat-input');
  if (!input) return;
  var msg = input.value.trim();
  if (!msg) return;
  var log = document.getElementById('chat-log');
  log.innerHTML += '<div style="text-align:right;margin-bottom:10px;"><span style="background:#C0392B;color:#fff;padding:8px 12px;border-radius:12px 12px 2px 12px;font-size:13px;display:inline-block;max-width:80%;">' + msg + '</span></div>';
  input.value = '';
  setTimeout(function() {
    var lower = msg.toLowerCase();
    var reply = 'For more information kindly contact our team directly. <a href="/contact" style="color:#E8857C;font-weight:600;">Contact us here.</a>';
    if (/(location|where|based|office|nairobi|kenya)/.test(lower)) {
      reply = 'BrandVibe is headquartered in Nairobi, Kenya. Reach us at info@brandvibe.co.ke';
    } else if (/(what services|services do|what do you offer|what do you do|offer)/.test(lower)) {
      reply = 'We offer: Social Media, Content, Digital (Meta), Business Development, Monthly Retainers, and AutoVibe Automation. <a href="/services#services-packages" style="color:#E8857C;font-weight:600;">See all services.</a>';
    } else if (/(service|package|price|pricing|cost|how much)/.test(lower)) {
      reply = 'Marketing packages from KSh 30,000/month (Starter), 60,000 (Growth), 120,000 (Premium). AutoVibe from KSh 70,000. <a href="/services#services-packages" style="color:#E8857C;font-weight:600;">View all packages.</a>';
    } else if (/(contact|quote|audit|enquir|reach|talk)/.test(lower)) {
      reply = 'Email info@brandvibe.co.ke or <a href="/contact#get-in-touch" style="color:#E8857C;font-weight:600;">use the contact form</a>. We reply within 48 hours.';
    } else if (/(automat|autovibe|whatsapp bot|crm|workflow)/.test(lower)) {
      reply = 'AutoVibe builds custom automation — projects from KSh 70,000. <a href="/autovibe" style="color:#E8857C;font-weight:600;">Learn more.</a>';
    } else if (/(portfolio|work|case study|client|example)/.test(lower)) {
      reply = 'We have worked across 6 industries. <a href="/portfolio" style="color:#E8857C;font-weight:600;">See our portfolio.</a>';
    } else if (/(about|team|who are|brandvibe)/.test(lower)) {
      reply = 'BrandVibe is a full-service branding & marketing agency in Nairobi. <a href="/about" style="color:#E8857C;font-weight:600;">Learn more.</a>';
    } else if (/(blog|article|insight|tip)/.test(lower)) {
      reply = 'Read practical marketing insights. <a href="/blog" style="color:#E8857C;font-weight:600;">Read our blog.</a>';
    } else if (/(hello|^hi$|hey|good morning|good afternoon)/.test(lower)) {
      reply = 'Hi! I can help with services, pricing, location, portfolio, or AutoVibe. What would you like to know?';
    }
    log.innerHTML += '<div style="text-align:left;margin-bottom:10px;"><span style="background:#f0e0e0;color:#2C1810;padding:8px 12px;border-radius:12px 12px 12px 2px;font-size:13px;display:inline-block;max-width:85%;line-height:1.6;">' + reply + '</span></div>';
    log.scrollTop = log.scrollHeight;
  }, 600);
  log.scrollTop = log.scrollHeight;
}
window.sendChatMessage = sendChatMessage;

// ── CONTACT FORM (Formspree) ──
function initContactForm() {
  var form = document.getElementById('brandvibe-contact-form');
  if (!form || form.dataset.bound === '1') return;
  form.dataset.bound = '1';
  var btn = document.getElementById('form-submit-btn');
  var ok = document.getElementById('form-success');
  var err = document.getElementById('form-error');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (ok) ok.style.display = 'none';
    if (err) err.style.display = 'none';
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; btn.style.opacity = '0.7'; }
    var data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(function(r) {
      if (!r.ok) throw new Error('Request failed');
      form.reset();
      form.style.display = 'none';
      if (ok) { ok.style.display = 'block'; ok.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      trackEvent('contact_form_submit');
      trackEvent('contact_form_submission');
      // Re-bind Calendly button that appears inside the success message
      if (typeof initCalendly === 'function') initCalendly();
    }).catch(function() {
      if (err) { err.style.display = 'block'; err.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      if (btn) { btn.disabled = false; btn.textContent = 'Send Message →'; btn.style.opacity = '1'; }
    });
  });
  var chatInput = document.getElementById('chat-input');
  if (chatInput && chatInput.dataset.bound !== '1') {
    chatInput.dataset.bound = '1';
    chatInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendChatMessage(); });
  }
}


// ── SCROLL DEPTH ──
function initScrollDepth() {
  if (window._cvScrollBound) return;
  window._cvScrollBound = true;
  var marks = [25, 50, 75, 100]; var fired = {};
  window.addEventListener('scroll', function() {
    var h = document.documentElement;
    var pct = Math.round(((window.scrollY + window.innerHeight) / h.scrollHeight) * 100);
    marks.forEach(function(m) {
      if (pct >= m && !fired[m]) { fired[m] = true; trackEvent('scroll_depth', { percent: m }); }
    });
  }, { passive: true });
}

// ── OUTBOUND LINKS ──
function initOutboundTracking() {
  document.querySelectorAll('a[href^="http"]').forEach(function(a) {
    if (a.dataset.outboundBound === '1') return;
    a.dataset.outboundBound = '1';
    try {
      var url = new URL(a.href);
      if (url.hostname === location.hostname) return;
      a.addEventListener('click', function() {
        trackEvent('outbound_click', { href: a.href, host: url.hostname });
      });
    } catch (e) {}
  });
}

// ── INIT ──
function brandvibeInit() {
  initCounters();
  initFilterTabs();
  initAnalyticsTracking();
  initContactForm();
  initCalendly();
  initScrollDepth();
  initOutboundTracking();
  var chatInput = document.getElementById('chat-input');
  if (chatInput && chatInput.dataset.bound !== '1') {
    chatInput.dataset.bound = '1';
    chatInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') sendChatMessage(); });
  }
}
window.brandvibeInit = brandvibeInit;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', brandvibeInit);
} else {
  brandvibeInit();
}

// ── GA4 DEBUG PANEL ──
// Toggle: ?gadebug=1 in URL, or Ctrl/Cmd+Shift+G, or window.ga4Debug()
(function () {
  var ENABLED_KEY = 'bv_ga4_debug';
  var enabled = false;
  try {
    var qp = new URLSearchParams(location.search);
    if (qp.get('gadebug') === '1') localStorage.setItem(ENABLED_KEY, '1');
    if (qp.get('gadebug') === '0') localStorage.removeItem(ENABLED_KEY);
    enabled = localStorage.getItem(ENABLED_KEY) === '1';
  } catch (e) {}

  var entries = [];
  var MAX = 60;

  function build() {
    if (document.getElementById('ga4-debug')) return;
    var launcher = document.createElement('button');
    launcher.id = 'ga4-debug-launcher';
    launcher.type = 'button';
    launcher.textContent = 'GA4 Debug ▴';
    launcher.setAttribute('aria-label', 'Open GA4 debug panel');
    launcher.onclick = function () { open(); };

    var panel = document.createElement('div');
    panel.id = 'ga4-debug';
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-label', 'GA4 debug panel');
    panel.innerHTML =
      '<header><span>GA4 Debug · G-WS9F2F7GM9</span><button type="button" aria-label="Close" id="ga4-debug-close">×</button></header>' +
      '<div class="ga4-status" id="ga4-debug-status">Checking gtag…</div>' +
      '<div class="ga4-log" id="ga4-debug-log" aria-live="polite"></div>' +
      '<div class="ga4-actions">' +
        '<button type="button" id="ga4-debug-test">Fire test event</button>' +
        '<button type="button" id="ga4-debug-clear">Clear</button>' +
        '<button type="button" id="ga4-debug-off">Disable</button>' +
      '</div>';
    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    document.getElementById('ga4-debug-close').onclick = close;
    document.getElementById('ga4-debug-clear').onclick = function () { entries = []; render(); };
    document.getElementById('ga4-debug-test').onclick = function () {
      window.trackEvent && window.trackEvent('debug_test', { source: 'debug_panel', ts: Date.now() });
    };
    document.getElementById('ga4-debug-off').onclick = function () {
      try { localStorage.removeItem(ENABLED_KEY); } catch (e) {}
      panel.classList.remove('open'); launcher.classList.remove('show');
    };
    checkStatus();
  }

  function open() {
    build();
    document.getElementById('ga4-debug').classList.add('open');
    document.getElementById('ga4-debug-launcher').classList.remove('show');
    render();
  }
  function close() {
    var p = document.getElementById('ga4-debug');
    if (p) p.classList.remove('open');
    var l = document.getElementById('ga4-debug-launcher');
    if (l) l.classList.add('show');
  }

  function checkStatus() {
    var el = document.getElementById('ga4-debug-status');
    if (!el) return;
    var hasGtag = typeof window.gtag === 'function';
    var hasDL = Array.isArray(window.dataLayer);
    if (hasGtag && hasDL) {
      el.className = 'ga4-status ok';
      el.textContent = '✓ gtag ready · dataLayer entries: ' + window.dataLayer.length;
    } else {
      el.className = 'ga4-status warn';
      el.textContent = '⚠ gtag ' + (hasGtag ? 'ok' : 'missing') + ' · dataLayer ' + (hasDL ? 'ok' : 'missing');
    }
  }

  function render() {
    var log = document.getElementById('ga4-debug-log');
    if (!log) return;
    log.innerHTML = entries.slice().reverse().map(function (e) {
      var props = e.props && Object.keys(e.props).length ? '<div class="ga4-props">' + escapeHtml(JSON.stringify(e.props)) + '</div>' : '';
      return '<div class="ga4-entry"><span class="ga4-name">' + escapeHtml(e.name) + '</span><span class="ga4-time">' + e.time + '</span>' + props + '</div>';
    }).join('');
    checkStatus();
  }
  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); }

  function log(name, props) {
    entries.push({ name: name, props: props || {}, time: new Date().toLocaleTimeString() });
    if (entries.length > MAX) entries.shift();
    if (document.getElementById('ga4-debug')) render();
  }

  // Wrap trackEvent to capture every call
  var orig = window.trackEvent || (typeof trackEvent === 'function' ? trackEvent : null);
  window.trackEvent = function (name, props) {
    log(name, props);
    if (orig) try { orig(name, props); } catch (e) {}
  };

  // Capture gtag('event', ...) calls directly (including page_view)
  var origGtag = window.gtag;
  if (typeof origGtag === 'function') {
    window.gtag = function () {
      try {
        if (arguments[0] === 'event') log('gtag:' + arguments[1], arguments[2] || {});
        else if (arguments[0] === 'config') log('gtag:config', { id: arguments[1] });
      } catch (e) {}
      return origGtag.apply(this, arguments);
    };
  }
  log('page_view', { path: location.pathname, title: document.title });

  // Hotkey to toggle
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'G' || e.key === 'g')) {
      e.preventDefault();
      try { localStorage.setItem(ENABLED_KEY, '1'); } catch (err) {}
      var p = document.getElementById('ga4-debug');
      if (p && p.classList.contains('open')) close(); else open();
    }
  });

  window.ga4Debug = open;

  if (enabled) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', open);
    } else {
      open();
    }
  }
})();
