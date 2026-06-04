import { jsx } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-DhiuMftR.js";
import "react";
import "@tanstack/react-router";
const html = `  <div class="av-hero">\r
    <div class="av-hero-inner">\r
      <div>\r
        <span class="av-hero-badge"> AutoVibe — Smart Automation</span>\r
        <h1 class="av-hero-title">Stop doing manually<br/>what a <em>system</em> can do for you.</h1>\r
        <p class="av-hero-sub">AutoVibe builds custom business automation systems — from lead follow-ups to HR onboarding — so your team spends time on what actually grows the business.</p>\r
        <div class="av-hero-ctas"><a class="btn-crimson" href="/contact">Request a quote →</a><a class="btn-ghost">See how it works ↓</a></div>\r
        <div class="av-hero-stats">\r
          <div><p class="av-stat-num">60s</p><p class="av-stat-label">Avg lead response time</p></div>\r
          <div><p class="av-stat-num">0</p><p class="av-stat-label">Manual follow-ups</p></div>\r
          <div><p class="av-stat-num">3×</p><p class="av-stat-label">Avg conversion increase</p></div>\r
          <div><p class="av-stat-num">4 wks</p><p class="av-stat-label">Average build time</p></div>\r
        </div>\r
      </div>\r
      <div class="av-hero-card">\r
        <p class="av-card-title">What we automate</p>\r
        <ul class="av-type-list">\r
          <li class="av-type-item"><span class="av-type-icon"></span><div><p class="av-type-name">Lead Capture &amp; Follow-up</p><p class="av-type-desc">Convert leads 24/7 without manual effort</p></div></li>\r
          <li class="av-type-item"><span class="av-type-icon"></span><div><p class="av-type-name">WhatsApp &amp; Chatbot</p><p class="av-type-desc">Instant responses, FAQs, and booking</p></div></li>\r
          <li class="av-type-item"><span class="av-type-icon"></span><div><p class="av-type-name">CRM &amp; Workflow</p><p class="av-type-desc">Pipelines and task triggers connected</p></div></li>\r
          <li class="av-type-item"><span class="av-type-icon"></span><div><p class="av-type-name">Invoice &amp; Payments</p><p class="av-type-desc">Automated billing and reminders</p></div></li>\r
          <li class="av-type-item"><span class="av-type-icon"></span><div><p class="av-type-name">HR &amp; Onboarding</p><p class="av-type-desc">Staff onboarding on autopilot</p></div></li>\r
        </ul>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <section class="av-auto-section" style="padding:5rem 3rem;">\r
    <div class="sec-inner">\r
      <span class="eyebrow">Automation Types</span>\r
      <h2 class="section-title" style="color:#fff;">Built for African businesses.</h2>\r
      <p style="font-size:15px;color:rgba(255,255,255,0.4);line-height:1.8;margin-bottom:2.5rem;max-width:500px;">Every system is custom-designed around how your business actually works.</p>\r
      <div class="automations-grid">\r
        <div class="auto-card"><div class="auto-icon"></div><p class="auto-name">Lead Capture &amp; Follow-up</p><p class="auto-desc">Never lose a lead to slow response. Instant email + WhatsApp follow-ups that nurture prospects until they convert.</p><div class="auto-exs"><span class="auto-ex">Instant welcome</span><span class="auto-ex">5-email nurture</span><span class="auto-ex">Enrollment push</span></div></div>\r
        <div class="auto-card"><div class="auto-icon"></div><p class="auto-name">WhatsApp &amp; Chatbot</p><p class="auto-desc">Respond to inquiries, answer FAQs, book appointments — through WhatsApp, automatically, 24/7.</p><div class="auto-exs"><span class="auto-ex">WhatsApp API</span><span class="auto-ex">FAQ bot</span><span class="auto-ex">Appointment booking</span></div></div>\r
        <div class="auto-card"><div class="auto-icon"></div><p class="auto-name">CRM &amp; Workflow</p><p class="auto-desc">Connect your tools, automate task assignments, and build pipelines that move leads without manual input.</p><div class="auto-exs"><span class="auto-ex">Pipeline setup</span><span class="auto-ex">Task triggers</span><span class="auto-ex">Notifications</span></div></div>\r
        <div class="auto-card"><div class="auto-icon"></div><p class="auto-name">Invoice &amp; Payment</p><p class="auto-desc">Automated invoicing, payment reminders, and reconciliation — so finance spends less time chasing.</p><div class="auto-exs"><span class="auto-ex">Auto-invoicing</span><span class="auto-ex">Reminders</span><span class="auto-ex">Reconciliation</span></div></div>\r
        <div class="auto-card"><div class="auto-icon"></div><p class="auto-name">HR &amp; Onboarding</p><p class="auto-desc">From offer letters to first-day schedules — automate staff onboarding for a consistent experience.</p><div class="auto-exs"><span class="auto-ex">Document collection</span><span class="auto-ex">Welcome sequences</span><span class="auto-ex">Scheduling</span></div></div>\r
        <div class="auto-card"><div class="auto-icon"></div><p class="auto-name">Marketing Automation</p><p class="auto-desc">Email campaigns, social scheduling, re-engagement sequences, and reporting — running in the background.</p><div class="auto-exs"><span class="auto-ex">Email campaigns</span><span class="auto-ex">Re-engagement</span><span class="auto-ex">Auto-reporting</span></div></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="process-section" style="padding:5rem 3rem;">\r
    <div class="sec-inner">\r
      <span class="eyebrow">How It Works</span>\r
      <h2 class="section-title" style="color:#fff;">From audit to handover — in 4 weeks.</h2>\r
      <p style="font-size:15px;color:rgba(255,255,255,0.4);line-height:1.8;margin-bottom:2.5rem;max-width:500px;">Every AutoVibe project follows the same proven four-step process.</p>\r
      <div class="process-steps">\r
        <div class="p-step-dark"><p class="p-num">Step 01</p><div class="p-icon"></div><h3 class="p-title">Workflow Audit</h3><p class="p-desc">We map your current process, find every manual bottleneck, and identify what to automate first for maximum impact.</p></div>\r
        <div class="p-step-dark"><p class="p-num">Step 02</p><div class="p-icon"></div><h3 class="p-title">System Design</h3><p class="p-desc">We design the automation blueprint — tools, triggers, sequences, and integrations — and walk you through it before building.</p></div>\r
        <div class="p-step-dark"><p class="p-num">Step 03</p><div class="p-icon"></div><h3 class="p-title">Build &amp; Test</h3><p class="p-desc">We build the full system, connect all your tools, and test every flow end-to-end before anything goes live.</p></div>\r
        <div class="p-step-dark"><p class="p-num">Step 04</p><div class="p-icon"></div><h3 class="p-title">Handover &amp; Support</h3><p class="p-desc">We hand over a fully working system with documentation and a training session — plus ongoing support if needed.</p></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="av-pricing-section" style="padding:5rem 3rem;">\r
    <div class="sec-inner">\r
      <span class="eyebrow">Pricing</span>\r
      <h2 class="section-title" style="color:#fff;">Quoted per scope. No surprises.</h2>\r
      <div class="av-pricing-card">\r
        <div class="av-price-left"><p class="big-from">Projects from</p><p class="big-price">KSh 70,000</p><p class="big-note">Every AutoVibe project is scoped and quoted individually. Request a quote and we'll give you an exact figure within 48 hours.</p><a class="btn-crimson" href="/contact">Request a free audit →</a></div>\r
        <div class="pf-box"><p class="pf-title">What affects the price</p><ul class="pf-list"><li>Number of automations needed</li><li>Tools and platforms to integrate</li><li>Complexity of existing workflows</li><li>Custom copywriting required</li><li>Ongoing support &amp; maintenance</li></ul></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="bv-faq-section" style="padding:5rem 3rem;background:var(--cream,#FBF7F2);">\r
    <div class="sec-inner">\r
      <span class="eyebrow">FAQs</span>\r
      <h2 class="section-title">Questions Businesses Ask Before They Grow With BrandVibe</h2>\r
      <p class="section-sub">Quick answers about scope, timelines, pricing and support for AutoVibe automation projects.</p>\r
      <div class="bv-faq-wrap">\r
        <details class="bv-faq"><summary>What is Smart Business Automation?</summary><div class="bv-faq-body">Smart Business Automation uses technology to automate repetitive business processes such as lead management, follow-ups, appointment booking, reporting, customer communication, and workflow management.</div></details>\r
        <details class="bv-faq"><summary>What is business automation?</summary><div class="bv-faq-body">Business automation uses technology to streamline repetitive tasks, improve efficiency, reduce manual work, and create better customer experiences.</div></details>\r
        <details class="bv-faq"><summary>How can business automation help my company?</summary><div class="bv-faq-body">Automation can help manage leads, automate follow-ups, improve customer communication, streamline operations, and save valuable time.</div></details>\r
        <details class="bv-faq"><summary>What can you automate?</summary><div class="bv-faq-body">Lead capture and follow-up, WhatsApp Business API chatbots, CRM and pipeline workflows, invoice and payment reminders, HR onboarding flows, and marketing automation (email, scheduling, re-engagement, reporting).</div></details>\r
        <details class="bv-faq"><summary>How long does a typical AutoVibe project take?</summary><div class="bv-faq-body">About 4 weeks from kickoff to handover: workflow audit, system design, build and testing, then training and handover with documentation.</div></details>\r
        <details class="bv-faq"><summary>How much does AutoVibe cost?</summary><div class="bv-faq-body">Projects start from KSh 70,000 and are quoted per scope. Pricing depends on the number of automations, tools to integrate, workflow complexity and whether you want ongoing support. <a href="/contact" style="color:var(--crimson);font-weight:600;">Request a free audit →</a></div></details>\r
        <details class="bv-faq"><summary>Do you offer ongoing support?</summary><div class="bv-faq-body">Yes. After handover we offer optional monthly support and maintenance plans, plus on-demand changes when your processes evolve.</div></details>\r
        <details class="bv-faq"><summary>Can BrandVibe help generate leads and sales?</summary><div class="bv-faq-body">Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth.</div></details>\r
        <details class="bv-faq"><summary>Do you work with businesses outside Nairobi?</summary><div class="bv-faq-body">Yes. We support clients across Kenya and East Africa through both remote and in-person engagements.</div></details>\r
        <details class="bv-faq"><summary>How do I get started with BrandVibe?</summary><div class="bv-faq-body">You can submit an inquiry through our contact form or schedule a strategy consultation. We'll learn about your business and recommend the most suitable growth approach. <a href="/contact" style="color:var(--crimson);font-weight:600;">Contact us →</a></div></details>\r
        <details class="bv-faq"><summary>Why choose BrandVibe?</summary><div class="bv-faq-body">BrandVibe combines strategy, marketing, automation, business development, and growth-focused execution to help organizations build sustainable results rather than short-term visibility alone.</div></details>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <div class="av-cta-section">\r
    <h2 class="av-cta-title">Ready to stop doing it manually?</h2>\r
    <p class="av-cta-sub">Tell us about your business and the tasks eating your team's time.<br/>We'll scope a custom system and give you an exact quote within 48 hours.</p>\r
    <div style="display:flex;justify-content:center;gap:14px;flex-wrap:wrap;"><a class="btn-white" href="/contact">Request a quote →</a><a class="btn-ghost" style="border-color:rgba(255,255,255,0.3);color:rgba(255,255,255,0.8);">See automation types ↑</a></div>\r
  </div>\r
\r
\r
`;
const SplitComponent = () => /* @__PURE__ */ jsx(PageShell, { html });
export {
  SplitComponent as component
};
