import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import html from "../fragments/_services.html?raw";

const SERVICES_FAQS = [
  {
    q: "What services does BrandVibe offer?",
    a: "BrandVibe offers branding and brand strategy, social media marketing, digital marketing campaigns, content marketing, influencer marketing, PR and communications, business development support, smart business automation, and marketing consultancy.",
  },
  {
    q: "Do you offer customized marketing solutions?",
    a: "Yes. Every business is different. We tailor our recommendations, campaigns, and growth systems based on your industry, goals, target audience, and budget.",
  },
  {
    q: "How do I get started with BrandVibe?",
    a: "You can submit an inquiry through our contact form or schedule a strategy consultation. We'll learn about your business and recommend the most suitable growth approach.",
  },
  {
    q: "Can BrandVibe manage our social media accounts?",
    a: "Yes. We provide social media strategy, content planning, content creation, publishing, community management, campaign support, and performance reporting.",
  },
  {
    q: "What platforms do you manage?",
    a: "We support Facebook, Instagram, LinkedIn, TikTok, X (Twitter), YouTube, and WhatsApp Business.",
  },
  {
    q: "Can BrandVibe help generate leads and sales?",
    a: "Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth.",
  },
  {
    q: "Do you offer influencer marketing?",
    a: "Yes. We help brands identify suitable influencers, manage collaborations, coordinate campaigns, and track campaign performance.",
  },
  {
    q: "Do you provide PR and communications services?",
    a: "Yes. We support media relations, press releases, communication planning, reputation management, and public engagement strategies.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary depending on your industry, goals, competition, and marketing activities. Some campaigns generate early traction within weeks, while long-term growth initiatives require consistent execution over several months.",
  },
  {
    q: "Do you provide reporting?",
    a: "Yes. We provide regular performance reporting and insights so you can understand what is working and where opportunities for improvement exist.",
  },
  {
    q: "What is a digital marketing agency?",
    a: "A digital marketing agency helps businesses attract customers online through social media marketing, content marketing, advertising, search engine optimization, and digital growth strategies.",
  },
  {
    q: "How do I choose the right marketing agency?",
    a: "Look for an agency with relevant experience, a clear strategy, measurable processes, transparent communication, and a proven ability to support business growth.",
  },
  {
    q: "Why choose BrandVibe?",
    a: "BrandVibe combines strategy, marketing, automation, business development, and growth-focused execution to help organizations build sustainable results rather than short-term visibility alone.",
  },
  {
    q: "What's included in a monthly retainer?",
    a: "Every retainer includes a dedicated point of contact, monthly strategy and reporting, content production, scheduled publishing and optimisation. Specific deliverables scale with the package you choose.",
  },
  {
    q: "Can I customise a package?",
    a: "Yes. The Starter / Growth / Premium tiers are starting points. We tailor scope and pricing to your goals.",
  },
  {
    q: "How much do your marketing packages cost?",
    a: "Monthly retainers start at KSh 30,000 (Starter), KSh 60,000 (Growth) and KSh 120,000 (Premium). AutoVibe automation projects start at KSh 70,000 and are quoted per scope.",
  },
];

const SERVICES_LIST = [
  "Smart Business Automation",
  "PR & Communications",
  "Digital Marketing",
  "Social Media Strategy",
  "Influencer Marketing",
  "Business Development",
  "Content Production",
  "Monthly Marketing Retainers",
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Marketing Services in Kenya | BrandVibe" },
      {
        name: "description",
        content:
          "Branding, digital marketing, social media, PR, business development and automation packages in Kenya. Monthly retainers from KSh 30,000 — tailored to your growth goals.",
      },
      { property: "og:title", content: "BrandVibe Services & Pricing" },
      { property: "og:description", content: "Marketing packages built around your goals. Clear deliverables. Transparent pricing." },
      { property: "og:url", content: "https://brandvibe.co.ke/services" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Marketing Services in Kenya | BrandVibe" },
      { name: "twitter:description", content: "Branding, digital, PR, social, automation. Monthly retainers from KSh 30,000." },
    ],
    links: [{ rel: "canonical", href: "https://brandvibe.co.ke/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "Branding and Marketing Agency Services",
              provider: { "@id": "https://brandvibe.co.ke/#organization" },
              areaServed: ["Nairobi", "Kenya", "East Africa"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "BrandVibe Services",
                itemListElement: SERVICES_LIST.map((s) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: s },
                })),
              },
              offers: [
                { "@type": "Offer", name: "Starter Retainer", price: "30000", priceCurrency: "KES", priceSpecification: { "@type": "UnitPriceSpecification", price: "30000", priceCurrency: "KES", unitText: "MONTH" } },
                { "@type": "Offer", name: "Growth Retainer", price: "60000", priceCurrency: "KES", priceSpecification: { "@type": "UnitPriceSpecification", price: "60000", priceCurrency: "KES", unitText: "MONTH" } },
                { "@type": "Offer", name: "Premium Retainer", price: "120000", priceCurrency: "KES", priceSpecification: { "@type": "UnitPriceSpecification", price: "120000", priceCurrency: "KES", unitText: "MONTH" } },
              ],
            },
            {
              "@type": "FAQPage",
              mainEntity: SERVICES_FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://brandvibe.co.ke/" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://brandvibe.co.ke/services" },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: () => <PageShell html={html} />,
});
