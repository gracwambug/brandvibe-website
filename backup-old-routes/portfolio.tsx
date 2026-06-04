import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import html from "../fragments/_portfolio.html?raw";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "BrandVibe Portfolio | Client Growth Stories" },
      {
        name: "description",
        content:
          "Branding, marketing and automation case studies from BrandVibe — challenge, solution and outcome across healthcare, SaaS, EdTech, NGOs and more in Kenya.",
      },
      { property: "og:title", content: "BrandVibe Portfolio & Case Studies" },
      { property: "og:description", content: "Selected client case studies — challenge, solution, outcome." },
      { property: "og:url", content: "https://brandvibe.co.ke/portfolio" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BrandVibe Portfolio | Client Growth Stories" },
      { name: "twitter:description", content: "Branding, marketing & automation case studies across 6 industries." },
    ],
    links: [{ rel: "canonical", href: "https://brandvibe.co.ke/portfolio" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://brandvibe.co.ke/" },
            { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://brandvibe.co.ke/portfolio" },
          ],
        }),
      },
    ],
  }),
  component: () => <PageShell html={html} />,
});
