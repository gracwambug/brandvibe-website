import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import html from "../fragments/_about.html?raw";

const breadcrumb = (name: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://brandvibe.co.ke/" },
    { "@type": "ListItem", position: 2, name, item: `https://brandvibe.co.ke${path}` },
  ],
});

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BrandVibe | Strategy, Systems & Growth" },
      {
        name: "description",
        content:
          "Meet BrandVibe: a Nairobi-based branding, marketing and automation team helping growth-minded businesses across Kenya and East Africa build brands that perform.",
      },
      { property: "og:title", content: "About BrandVibe" },
      { property: "og:description", content: "Strategy-first branding and marketing. Online and offline. Real results, plain-English reporting." },
      { property: "og:url", content: "https://brandvibe.co.ke/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About BrandVibe" },
      { name: "twitter:description", content: "Strategy-first branding, marketing & automation team in Nairobi." },
    ],
    links: [{ rel: "canonical", href: "https://brandvibe.co.ke/about" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumb("About", "/about")) },
    ],
  }),
  component: () => <PageShell html={html} />,
});
