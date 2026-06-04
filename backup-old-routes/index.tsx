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
  { q: "Can you help improve our existing marketing efforts?", a: "Absolutely. We can audit your current marketing activities, identify gaps, and recommend improvements that align with your business objectives." },
  { q: "Do you provide reporting?", a: "Yes. We provide regular performance reporting and insights so you can understand what is working and where opportunities for improvement exist." },
  { q: "What is a digital marketing agency?", a: "A digital marketing agency helps businesses attract customers online through social media marketing, content marketing, advertising, search engine optimization, and digital growth strategies." },
  { q: "Why is digital marketing important for businesses?", a: "Digital marketing helps businesses increase visibility, reach their target audience, generate leads, improve customer engagement, and drive revenue growth." },
  { q: "What does a branding agency do?", a: "A branding agency helps businesses define their identity, positioning, messaging, visual presence, and customer perception to create a stronger market presence." },
  { q: "What is social media marketing?", a: "Social media marketing involves using platforms such as Facebook, Instagram, LinkedIn, TikTok, and X to build brand awareness, engage audiences, and support business growth." },
  { q: "What is business automation?", a: "Business automation uses technology to streamline repetitive tasks, improve efficiency, reduce manual work, and create better customer experiences." },
  { q: "How can business automation help my company?", a: "Automation can help manage leads, automate follow-ups, improve customer communication, streamline operations, and save valuable time." },
  { q: "What is influencer marketing?", a: "Influencer marketing involves partnering with trusted creators and personalities to promote products, services, or campaigns to targeted audiences." },
  { q: "Why is PR important for a business?", a: "Public relations helps build credibility, strengthen reputation, improve visibility, and create trust among customers, partners, and stakeholders." },
  { q: "How do I choose the right marketing agency?", a: "Look for an agency with relevant experience, a clear strategy, measurable processes, transparent communication, and a proven ability to support business growth." },
  { q: "Why choose BrandVibe?", a: "BrandVibe combines strategy, marketing, automation, business development, and growth-focused execution to help organizations build sustainable results rather than short-term visibility alone." },
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
