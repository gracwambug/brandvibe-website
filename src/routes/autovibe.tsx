import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import html from "../fragments/_autovibe.html?raw";

const AUTOVIBE_FAQS = [
  {
    q: "What is Smart Business Automation?",
    a: "Smart Business Automation uses technology to automate repetitive business processes such as lead management, follow-ups, appointment booking, reporting, customer communication, and workflow management.",
  },
  {
    q: "What is business automation?",
    a: "Business automation uses technology to streamline repetitive tasks, improve efficiency, reduce manual work, and create better customer experiences.",
  },
  {
    q: "How can business automation help my company?",
    a: "Automation can help manage leads, automate follow-ups, improve customer communication, streamline operations, and save valuable time.",
  },
  {
    q: "What can you automate?",
    a: "Lead capture and follow-up sequences, WhatsApp Business API chatbots, CRM and pipeline workflows, invoice and payment reminders, HR onboarding flows, and marketing automation (email, scheduling, re-engagement, reporting).",
  },
  {
    q: "How long does a typical AutoVibe project take?",
    a: "About 4 weeks from kickoff to handover: workflow audit, system design, build and testing, then training and handover with documentation.",
  },
  {
    q: "How much does AutoVibe cost?",
    a: "Projects start from KSh 70,000 and are quoted per scope. Pricing depends on the number of automations, tools to integrate, workflow complexity and whether you want ongoing support.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. After handover we offer optional monthly support and maintenance plans, plus on-demand changes when your processes evolve.",
  },
  {
    q: "Can BrandVibe help generate leads and sales?",
    a: "Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth.",
  },
  {
    q: "Do you work with businesses outside Nairobi?",
    a: "Yes. We support clients across Kenya and East Africa through both remote and in-person engagements.",
  },
  {
    q: "How do I get started with BrandVibe?",
    a: "You can submit an inquiry through our contact form or schedule a strategy consultation. We'll learn about your business and recommend the most suitable growth approach.",
  },
  {
    q: "Why choose BrandVibe?",
    a: "BrandVibe combines strategy, marketing, automation, business development, and growth-focused execution to help organizations build sustainable results rather than short-term visibility alone.",
  },
];

export const Route = createFileRoute("/autovibe")({
  head: () => ({
    meta: [
      { title: "AutoVibe | Smart Business Automation Solutions" },
      {
        name: "description",
        content:
          "AutoVibe builds custom business automation in Kenya — lead capture, WhatsApp bots, CRM, HR onboarding and invoicing. Projects from KSh 70,000.",
      },
      { property: "og:title", content: "AutoVibe — Smart Business Automation" },
      { property: "og:description", content: "Custom automation for lead capture, WhatsApp, CRM, HR and invoicing. Built in 4 weeks." },
      { property: "og:url", content: "https://brandvibe.co.ke/autovibe" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AutoVibe | Smart Business Automation Solutions" },
      { name: "twitter:description", content: "Lead capture, WhatsApp bots, CRM, HR & invoicing — built in 4 weeks." },
    ],
    links: [{ rel: "canonical", href: "https://brandvibe.co.ke/autovibe" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "AutoVibe — Smart Business Automation",
              serviceType: "Business Process Automation",
              provider: { "@id": "https://brandvibe.co.ke/#organization" },
              areaServed: ["Kenya", "East Africa", "Africa"],
              offers: { "@type": "Offer", price: "70000", priceCurrency: "KES" },
            },
            {
              "@type": "FAQPage",
              mainEntity: AUTOVIBE_FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            { "@type": "BreadcrumbList", itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://brandvibe.co.ke/" },
              { "@type": "ListItem", position: 2, name: "AutoVibe", item: "https://brandvibe.co.ke/autovibe" },
            ] },
          ],
        }),
      },
    ],
  }),
  component: () => <PageShell html={html} />,
});
