import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import html from "../fragments/_home.html?raw";

const HOME_FAQS = [
  { q: "What does BrandVibe do?", a: "BrandVibe is a branding, marketing, and business growth agency that helps organizations increase visibility, generate leads, strengthen their brand presence, and build sustainable growth systems through strategy, marketing, automation, and business development." },
  { q: "Who does BrandVibe work with?", a: "We work with startups, SMEs, NGOs, educational institutions, healthcare organizations, government projects, and growing businesses across Kenya and East Africa." },
  { q: "What services does BrandVibe offer?", a: "BrandVibe offers branding and brand strategy, social media marketing, digital marketing campaigns, content marketing, influencer marketing, PR and communications, business development support, smart business automation, and marketing consultancy." },
  { q: "Do you offer customized marketing solutions?", a: "Yes. Every business is different. We tailor our recommendations, campaigns, and growth systems based on your industry, goals, target audience, and budget." },
  { q: "How do I get started with BrandVibe?", a: "You can submit an inquiry through our contact form or schedule a strategy consultation. We'll learn about your business and recommend the most suitable growth approach." },
  { q: "Do you work with businesses outside Nairobi?", a: "Yes. We support clients across Kenya and East Africa through both remote and in-person engagements." },
  { q: "Can BrandVibe manage our social media accounts?", a: "Yes. We provide social media strategy, content planning, content creation, publishing, community management, campaign support, and performance reporting." },
  { q: "What platforms do you manage?", a: "We support Facebook, Instagram, LinkedIn, TikTok, X (Twitter), YouTube, and WhatsApp Business." },
  { q: "What is Smart Business Automation?", a: "Smart Business Automation uses technology to automate repetitive business processes such as lead management, follow-ups, appointment booking, reporting, customer communication, and workflow management." },
  { q: "Can BrandVibe help generate leads and sales?", a: "Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth." },
  { q: "Do you offer influencer marketing?", a: "Yes. We help brands identify suitable influencers, manage collaborations, coordinate campaigns, and track campaign performance." },
  { q: "Do you provide PR and communications services?", a: "Yes. We support media relations, press releases, communication planning, reputation management, and public engagement strategies." },
  { q: "How long does it take to see results?", a: "Results vary depending on your industry, goals, competition, and marketing activities. Some campaigns generate early traction within weeks, while long-term growth initiatives require consistent execution over several months." },
  { q: "Can I customise a package?", a: "Yes. The Starter / Growth / Premium tiers are starting points. We tailor scope and pricing to your goals." },
  { q: "How much do your marketing packages cost?", a: "Monthly retainers start at KSh 30,000 (Starter), KSh 60,000 (Growth) and KSh 120,000 (Premium). AutoVibe automation projects start at KSh 70,000 and are quoted per scope." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BrandVibe | Branding, Marketing & Growth Agency in Kenya" },
      {
        name: "description",
        content:
          "BrandVibe is a Nairobi-based full-service branding, marketing and automation agency serving Kenya and East Africa. Strategy, content, digital campaigns and AutoVibe automation — built for growth.",
      },
      { name: "keywords", content: "branding agency Nairobi, marketing agency Kenya, digital marketing Nairobi, business automation Kenya, AutoVibe, PR agency Nairobi, social media agency Kenya" },
      { property: "og:title", content: "BrandVibe | Strategy · Systems · Growth" },
      { property: "og:description", content: "Full-service branding, marketing and automation agency in Nairobi, Kenya." },
      { property: "og:url", content: "https://brandvibe.co.ke/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "BrandVibe" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BrandVibe | Strategy · Systems · Growth" },
      { name: "twitter:description", content: "Branding, marketing and automation built for African businesses." },
    ],
    links: [{ rel: "canonical", href: "https://brandvibe.co.ke/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => <PageShell html={html} />,
});
