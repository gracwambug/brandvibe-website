import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import html from "../fragments/_contact.html?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BrandVibe | Book a Strategy Consultation" },
      {
        name: "description",
        content:
          "Contact BrandVibe in Nairobi for branding, digital marketing, business development and automation. Book a free strategy call — we reply within 48 hours.",
      },
      { property: "og:title", content: "Contact BrandVibe" },
      { property: "og:description", content: "Book a free strategy consultation or request a tailored quote." },
      { property: "og:url", content: "https://brandvibe.co.ke/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact BrandVibe | Book a Strategy Consultation" },
      { name: "twitter:description", content: "Book a free strategy call or request a tailored quote." },
    ],
    links: [{ rel: "canonical", href: "https://brandvibe.co.ke/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "ContactPage", name: "Contact BrandVibe", url: "https://brandvibe.co.ke/contact", about: { "@id": "https://brandvibe.co.ke/#organization" } },
            { "@type": "BreadcrumbList", itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://brandvibe.co.ke/" },
              { "@type": "ListItem", position: 2, name: "Contact", item: "https://brandvibe.co.ke/contact" },
            ] },
          ],
        }),
      },
    ],
  }),
  component: () => <PageShell html={html} />,
});
