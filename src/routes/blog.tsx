import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import html from "../fragments/_blog.html?raw";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Marketing Insights & Business Growth Resources | BrandVibe" },
      {
        name: "description",
        content:
          "Articles on branding, digital marketing, PR, business development and business automation — practical growth insights for Kenyan and African businesses.",
      },
      { property: "og:title", content: "BrandVibe Blog" },
      { property: "og:description", content: "Insights on marketing, PR, automation and growth — built for African businesses." },
      { property: "og:url", content: "https://brandvibe.co.ke/blog" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Marketing Insights & Business Growth Resources" },
      { name: "twitter:description", content: "Practical articles on branding, marketing, PR & automation." },
    ],
    links: [{ rel: "canonical", href: "https://brandvibe.co.ke/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Blog", name: "BrandVibe Blog", url: "https://brandvibe.co.ke/blog", publisher: { "@id": "https://brandvibe.co.ke/#organization" }, about: ["marketing", "PR", "business automation", "NGO communications", "business growth"] },
            { "@type": "BreadcrumbList", itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://brandvibe.co.ke/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://brandvibe.co.ke/blog" },
            ] },
          ],
        }),
      },
    ],
  }),
  component: () => <PageShell html={html} />,
});
