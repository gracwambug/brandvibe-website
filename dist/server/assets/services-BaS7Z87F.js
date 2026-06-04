import { jsx } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DhiuMftR.js";
import "react";
import "@tanstack/react-router";
const html = `<div class="svc-premium">\r
  <div class="svc-hero">\r
    <div class="svc-hero-inner">\r
      <p class="svc-crumb">Home / <span>Services</span></p>\r
      <h1 class="svc-title">Strategy, systems &amp; growth —<br/><em>built around you.</em></h1>\r
      <p class="svc-sub">Every business is different. Our packages are a starting point — share your goals and we'll tailor a plan with clear deliverables and transparent pricing.</p>\r
      <div class="svc-note"><strong>How our pricing works:</strong> The prices below are starting points. Once you share your goals we'll send an exact monthly figure — no hidden fees, no surprises.</div>\r
    </div>\r
    <div class="svc-hero-fade"></div>\r
  </div>\r
\r
  <section class="svc-section svc-pricing">\r
    <div class="sec-inner">\r
      <span class="svc-eyebrow" id="services-packages">Marketing Packages</span>\r
      <h2 class="svc-h2">Choose your growth level</h2>\r
      <p class="svc-lede">All packages include a dedicated point of contact, monthly reporting, and a strategy review every quarter.</p>\r
      <div class="pricing-grid">\r
        <div class="p-card"><p class="tier-name">Starter</p><p class="tier-from">From</p><p class="tier-price">KSh 30,000 <span>/month</span></p><p class="tier-desc">For small businesses and startups getting their brand foundations right.</p><ul class="feature-list"><li>Social media strategy</li><li>Content calendar (8 posts/month)</li><li>Captions + creative direction</li><li>Monthly insights report</li><li class="muted">Meta campaign support</li><li class="muted">SEO blog content</li><li class="muted">Business development</li></ul><a class="btn-outline" href="/contact">Request a quote</a></div>\r
        <div class="p-card popular"><span class="popular-badge">Most Popular</span><p class="tier-name">Growth</p><p class="tier-from">From</p><p class="tier-price">KSh 60,000 <span>/month</span></p><p class="tier-desc">For growing brands ready to scale online and offline with a full strategy.</p><ul class="feature-list"><li>Everything in Starter</li><li>Content production + storytelling</li><li>Meta campaign support</li><li>SEO-ready blog content</li><li>Landing page direction</li><li>KPI tracking + optimization</li><li class="muted">Business development</li></ul><a class="btn-primary" href="/contact" style="display:block;text-align:center;">Request a quote</a></div>\r
        <div class="p-card"><p class="tier-name">Premium</p><p class="tier-from">From</p><p class="tier-price">KSh 120,000 <span>/month</span></p><p class="tier-desc">For established brands that want full-service marketing support.</p><ul class="feature-list"><li>Everything in Growth</li><li>Business development support</li><li>Pitch + proposal support</li><li>Outreach templates + scripts</li><li>CRM structure guidance</li><li>Dedicated account manager</li><li>Simple reporting + next steps</li></ul><a class="btn-outline" href="/contact">Request a quote</a></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="svc-section svc-offer">\r
    <div class="sec-inner">\r
      <div class="svc-offer-head">\r
        <span class="svc-eyebrow">What we offer</span>\r
        <h2 class="svc-h2">A full studio of <em>growth services</em></h2>\r
        <p class="svc-lede">Tap any service to see what's included, the systems we use, and what results to expect.</p>\r
      </div>\r
\r
      <div class="svc-acc">\r
        <details class="svc-card">\r
          <summary>\r
            <span class="svc-card-icon">◐</span>\r
            <span class="svc-card-meta">\r
              <span class="svc-card-tag">A · Automation</span>\r
              <span class="svc-card-name">Smart Business Automation</span>\r
              <span class="svc-card-desc">Replace manual follow-ups, onboarding and support with reliable, AI-assisted systems.</span>\r
            </span>\r
            <span class="svc-card-toggle" aria-hidden="true">+</span>\r
          </summary>\r
          <div class="svc-card-body">\r
            <div class="svc-col"><h4>Includes</h4><ul><li>CRM setup</li><li>WhatsApp automation</li><li>Lead capture systems</li><li>Automated follow-ups</li><li>Email workflows</li><li>Client onboarding</li><li>AI-assisted customer support</li><li>Business workflow automation</li></ul></div>\r
            <div class="svc-col"><h4>Tools we use</h4><p>HubSpot, Notion, Make.com, Zapier, WhatsApp Business API, OpenAI.</p><h4>Expect</h4><p>Hours back every week, faster lead response, and a clean operating system you actually trust.</p></div>\r
          </div>\r
        </details>\r
\r
        <details class="svc-card">\r
          <summary>\r
            <span class="svc-card-icon">◑</span>\r
            <span class="svc-card-meta">\r
              <span class="svc-card-tag">B · Communication</span>\r
              <span class="svc-card-name">PR &amp; Communication</span>\r
              <span class="svc-card-desc">Sharpen how your brand speaks — internally, publicly, and in the press.</span>\r
            </span>\r
            <span class="svc-card-toggle" aria-hidden="true">+</span>\r
          </summary>\r
          <div class="svc-card-body">\r
            <div class="svc-col"><h4>Includes</h4><ul><li>Brand messaging</li><li>PR strategy</li><li>Media communication</li><li>Press releases</li><li>Corporate communication</li><li>Reputation management</li><li>Internal communication systems</li></ul></div>\r
            <div class="svc-col"><h4>Deliverables</h4><p>Messaging framework, press kit, media list, and a quarterly comms calendar.</p><h4>Expect</h4><p>Consistent voice across every channel and a clear plan when the spotlight turns on.</p></div>\r
          </div>\r
        </details>\r
\r
        <details class="svc-card">\r
          <summary>\r
            <span class="svc-card-icon">◓</span>\r
            <span class="svc-card-meta">\r
              <span class="svc-card-tag">C · Performance</span>\r
              <span class="svc-card-name">Digital Marketing</span>\r
              <span class="svc-card-desc">Paid campaigns and funnels that turn attention into measurable revenue.</span>\r
            </span>\r
            <span class="svc-card-toggle" aria-hidden="true">+</span>\r
          </summary>\r
          <div class="svc-card-body">\r
            <div class="svc-col"><h4>Includes</h4><ul><li>Meta ads</li><li>Google Ads</li><li>Campaign strategy</li><li>Conversion funnels</li><li>Analytics reporting</li><li>Retargeting campaigns</li><li>Landing page optimization</li></ul></div>\r
            <div class="svc-col"><h4>Tools we use</h4><p>Meta Ads Manager, Google Ads, GA4, Looker Studio, Hotjar.</p><h4>Expect</h4><p>Lower cost-per-lead, transparent monthly reporting, and steady month-on-month gains.</p></div>\r
          </div>\r
        </details>\r
\r
        <details class="svc-card">\r
          <summary>\r
            <span class="svc-card-icon">◔</span>\r
            <span class="svc-card-meta">\r
              <span class="svc-card-tag">D · Social</span>\r
              <span class="svc-card-name">Social Media Strategy</span>\r
              <span class="svc-card-desc">A reliable content engine — strategy, calendars, and community in one place.</span>\r
            </span>\r
            <span class="svc-card-toggle" aria-hidden="true">+</span>\r
          </summary>\r
          <div class="svc-card-body">\r
            <div class="svc-col"><h4>Includes</h4><ul><li>Content calendars</li><li>Reels strategy</li><li>Platform growth strategy</li><li>Community management</li><li>Posting systems</li><li>Monthly reporting</li><li>Engagement optimization</li></ul></div>\r
            <div class="svc-col"><h4>Deliverables</h4><p>Monthly calendar, creative briefs, captions, and a live performance dashboard.</p><h4>Expect</h4><p>A feed you're proud of, a steady cadence, and audience growth you can track.</p></div>\r
          </div>\r
        </details>\r
\r
        <details class="svc-card">\r
          <summary>\r
            <span class="svc-card-icon">◕</span>\r
            <span class="svc-card-meta">\r
              <span class="svc-card-tag">E · Influence</span>\r
              <span class="svc-card-name">Influencer Marketing</span>\r
              <span class="svc-card-desc">Matchmaking with creators whose audience actually fits your brand.</span>\r
            </span>\r
            <span class="svc-card-toggle" aria-hidden="true">+</span>\r
          </summary>\r
          <div class="svc-card-body">\r
            <div class="svc-col"><h4>Includes</h4><ul><li>Influencer sourcing</li><li>Campaign coordination</li><li>Brand collaborations</li><li>Creator outreach</li><li>Campaign reporting</li><li>UGC strategy</li></ul></div>\r
            <div class="svc-col"><h4>Deliverables</h4><p>Shortlists, briefs, contracts, and a final reach + engagement report.</p><h4>Expect</h4><p>Authentic content you can re-use, with creators who actually move the needle.</p></div>\r
          </div>\r
        </details>\r
\r
        <details class="svc-card">\r
          <summary>\r
            <span class="svc-card-icon">●</span>\r
            <span class="svc-card-meta">\r
              <span class="svc-card-tag">F · Business Development</span>\r
              <span class="svc-card-name">Business Development</span>\r
              <span class="svc-card-desc">Pipeline, partnerships and outreach systems that bring opportunities to you.</span>\r
            </span>\r
            <span class="svc-card-toggle" aria-hidden="true">+</span>\r
          </summary>\r
          <div class="svc-card-body">\r
            <div class="svc-col"><h4>Includes</h4><ul><li>Partnership strategy</li><li>Lead generation systems</li><li>Sales pipeline support</li><li>Outreach systems</li><li>Networking campaigns</li><li>Growth consulting</li></ul></div>\r
            <div class="svc-col"><h4>Deliverables</h4><p>ICP definition, outreach scripts, CRM pipeline, and a weekly opportunity report.</p><h4>Expect</h4><p>A predictable pipeline and warmer, better-qualified conversations.</p></div>\r
          </div>\r
        </details>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="svc-section svc-addon">\r
    <div class="sec-inner">\r
      <span class="svc-eyebrow">Add-on Service</span>\r
      <h2 class="svc-h2">Events &amp; Activations</h2>\r
      <p class="svc-lede">Add to any marketing package or book as a standalone project.</p>\r
      <div class="addon-card soft">\r
        <div><p class="addon-tag">Add-on</p><h3 class="addon-title">Events &amp; Activations</h3><p class="addon-desc">Offline experiences that grow brand awareness and community credibility — planned, promoted, and coordinated by our team.</p><div class="pills"><span class="pill">Event concept + messaging</span><span class="pill">Promotion plan (online + offline)</span><span class="pill">Coordination support</span><span class="pill">Content capture</span></div></div>\r
        <div class="addon-right"><p class="addon-from">From</p><p class="addon-price">KSh 50,000 <span>/event</span></p><a class="btn-outline" href="/contact">Request a quote</a></div>\r
      </div>\r
\r
        <div class="svc-cta">\r
        <div><h3>Not sure which package fits?</h3><p>Tell us your goals and industry — we'll recommend the right plan with exact pricing within 48 hours.</p></div>\r
        <a class="btn-primary" href="/contact">Request a Quote →</a>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="bv-faq-section svc-section" style="background:#fff;">\r
    <div class="sec-inner">\r
      <span class="eyebrow">FAQs</span>\r
      <h2 class="section-title">Questions Businesses Ask Before They Grow With BrandVibe</h2>\r
      <p class="section-sub">Everything you need to know before starting a retainer with BrandVibe.</p>\r
      <div class="bv-faq-wrap">\r
        <details class="bv-faq"><summary>What services does BrandVibe offer?</summary><div class="bv-faq-body">BrandVibe offers branding and brand strategy, social media marketing, digital marketing campaigns, content marketing, influencer marketing, PR and communications, business development support, smart business automation, and marketing consultancy.</div></details>\r
        <details class="bv-faq"><summary>Do you offer customized marketing solutions?</summary><div class="bv-faq-body">Yes. Every business is different. We tailor our recommendations, campaigns, and growth systems based on your industry, goals, target audience, and budget. <a href="/services#services-packages" style="color:var(--crimson);font-weight:600;">View packages →</a></div></details>\r
        <details class="bv-faq"><summary>How do I get started with BrandVibe?</summary><div class="bv-faq-body">You can submit an inquiry through our contact form or schedule a strategy consultation. We'll learn about your business and recommend the most suitable growth approach. <a href="/contact" style="color:var(--crimson);font-weight:600;">Contact us →</a></div></details>\r
        <details class="bv-faq"><summary>Can BrandVibe manage our social media accounts?</summary><div class="bv-faq-body">Yes. We provide social media strategy, content planning, content creation, publishing, community management, campaign support, and performance reporting.</div></details>\r
        <details class="bv-faq"><summary>What platforms do you manage?</summary><div class="bv-faq-body">We support Facebook, Instagram, LinkedIn, TikTok, X (Twitter), YouTube, and WhatsApp Business.</div></details>\r
        <details class="bv-faq"><summary>Can BrandVibe help generate leads and sales?</summary><div class="bv-faq-body">Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth.</div></details>\r
        <details class="bv-faq"><summary>Do you offer influencer marketing?</summary><div class="bv-faq-body">Yes. We help brands identify suitable influencers, manage collaborations, coordinate campaigns, and track campaign performance.</div></details>\r
        <details class="bv-faq"><summary>Do you provide PR and communications services?</summary><div class="bv-faq-body">Yes. We support media relations, press releases, communication planning, reputation management, and public engagement strategies.</div></details>\r
        <details class="bv-faq"><summary>How long does it take to see results?</summary><div class="bv-faq-body">Results vary depending on your industry, goals, competition, and marketing activities. Some campaigns generate early traction within weeks, while long-term growth initiatives require consistent execution over several months.</div></details>\r
        <details class="bv-faq"><summary>Do you provide reporting?</summary><div class="bv-faq-body">Yes. We provide regular performance reporting and insights so you can understand what is working and where opportunities for improvement exist.</div></details>\r
        <details class="bv-faq"><summary>What is a digital marketing agency?</summary><div class="bv-faq-body">A digital marketing agency helps businesses attract customers online through social media marketing, content marketing, advertising, search engine optimization, and digital growth strategies.</div></details>\r
        <details class="bv-faq"><summary>How do I choose the right marketing agency?</summary><div class="bv-faq-body">Look for an agency with relevant experience, a clear strategy, measurable processes, transparent communication, and a proven ability to support business growth.</div></details>\r
        <details class="bv-faq"><summary>Why choose BrandVibe?</summary><div class="bv-faq-body">BrandVibe combines strategy, marketing, automation, business development, and growth-focused execution to help organizations build sustainable results rather than short-term visibility alone.</div></details>\r
        <details class="bv-faq"><summary>What's included in a monthly retainer?</summary><div class="bv-faq-body">Every retainer includes a dedicated point of contact, monthly strategy and reporting, content production, scheduled publishing and optimisation. Specific deliverables scale with the package you choose.</div></details>\r
        <details class="bv-faq"><summary>Can I customise a package?</summary><div class="bv-faq-body">Yes. The Starter / Growth / Premium tiers are starting points. We tailor scope and pricing to your goals — common add-ons include PR, influencer activations, paid media management and <a href="/autovibe" style="color:var(--crimson);font-weight:600;">AutoVibe automation</a>.</div></details>\r
        <details class="bv-faq"><summary>How much do your marketing packages cost?</summary><div class="bv-faq-body">Monthly retainers start at KSh 30,000 (Starter), KSh 60,000 (Growth) and KSh 120,000 (Premium). AutoVibe automation projects start at KSh 70,000 and are quoted per scope. <a href="/services#services-packages" style="color:var(--crimson);font-weight:600;">Compare packages →</a></div></details>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`;
const SplitComponent = () => /* @__PURE__ */ jsx(PageShell, { html });
export {
  SplitComponent as component
};
