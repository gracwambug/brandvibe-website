import fs from "fs/promises";
import path from "path";

const root = path.resolve("dist");
const templatePath = path.join(root, "index.html");
const fragmentsDir = path.resolve("src", "fragments");

// ── Per-page SEO data ──────────────────────────────────────────────────────

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
  { q: "How much do your marketing packages cost?", a: "Monthly retainers start at KSh 30,000 (Starter), KSh 60,000 (Growth) and KSh 120,000 (Premium). AutoVibe automation projects start at KSh 70,000 and are quoted per scope." },
];

const SERVICES_FAQS = [
  { q: "What services does BrandVibe offer?", a: "BrandVibe offers branding and brand strategy, social media marketing, digital marketing campaigns, content marketing, influencer marketing, PR and communications, business development support, smart business automation, and marketing consultancy." },
  { q: "Do you offer customized marketing solutions?", a: "Yes. Every business is different. We tailor our recommendations, campaigns, and growth systems based on your industry, goals, target audience, and budget." },
  { q: "How do I get started with BrandVibe?", a: "You can submit an inquiry through our contact form or schedule a strategy consultation." },
  { q: "Can BrandVibe manage our social media accounts?", a: "Yes. We provide social media strategy, content planning, content creation, publishing, community management, campaign support, and performance reporting." },
  { q: "What platforms do you manage?", a: "We support Facebook, Instagram, LinkedIn, TikTok, X (Twitter), YouTube, and WhatsApp Business." },
  { q: "Can BrandVibe help generate leads and sales?", a: "Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth." },
  { q: "How long does it take to see results?", a: "Results vary depending on your industry, goals, competition, and marketing activities. Some campaigns generate early traction within weeks, while long-term growth initiatives require consistent execution over several months." },
  { q: "What's included in a monthly retainer?", a: "Every retainer includes a dedicated point of contact, monthly strategy and reporting, content production, scheduled publishing and optimisation." },
  { q: "Can I customise a package?", a: "Yes. The Starter / Growth / Premium tiers are starting points. We tailor scope and pricing to your goals." },
  { q: "How much do your marketing packages cost?", a: "Monthly retainers start at KSh 30,000 (Starter), KSh 60,000 (Growth) and KSh 120,000 (Premium). AutoVibe automation projects start at KSh 70,000 and are quoted per scope." },
];

const AUTOVIBE_FAQS = [
  { q: "What is Smart Business Automation?", a: "Smart Business Automation uses technology to automate repetitive business processes such as lead management, follow-ups, appointment booking, reporting, customer communication, and workflow management." },
  { q: "What can you automate?", a: "Lead capture and follow-up sequences, WhatsApp Business API chatbots, CRM and pipeline workflows, invoice and payment reminders, HR onboarding flows, and marketing automation (email, scheduling, re-engagement, reporting)." },
  { q: "How long does a typical AutoVibe project take?", a: "About 4 weeks from kickoff to handover: workflow audit, system design, build and testing, then training and handover with documentation." },
  { q: "How much does AutoVibe cost?", a: "Projects start from KSh 70,000 and are quoted per scope. Pricing depends on the number of automations, tools to integrate, workflow complexity and whether you want ongoing support." },
  { q: "Do you offer ongoing support?", a: "Yes. After handover we offer optional monthly support and maintenance plans, plus on-demand changes when your processes evolve." },
  { q: "Do you work with businesses outside Nairobi?", a: "Yes. We support clients across Kenya and East Africa through both remote and in-person engagements." },
];

const ORG_ID = "https://brandvibe.co.ke/#organization";

function breadcrumb(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://brandvibe.co.ke/" },
      { "@type": "ListItem", position: 2, name, item: `https://brandvibe.co.ke${path}` },
    ],
  };
}

function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const pages = [
  {
    route: "/",
    output: path.join(root, "index.html"),
    fragment: "_home.html",
    title: "BrandVibe | Branding, Marketing & Growth Agency in Kenya",
    description:
      "BrandVibe is a Nairobi-based full-service branding, marketing and automation agency serving Kenya and East Africa. Strategy, content, digital campaigns and AutoVibe automation — built for growth.",
    canonical: "https://brandvibe.co.ke/",
    keywords: "branding agency Nairobi, marketing agency Kenya, digital marketing Nairobi, business automation Kenya, AutoVibe, PR agency Nairobi, social media agency Kenya",
    ogTitle: "BrandVibe | Strategy · Systems · Growth",
    ogDescription: "Full-service branding, marketing and automation agency in Nairobi, Kenya.",
    twitterTitle: "BrandVibe | Strategy · Systems · Growth",
    twitterDescription: "Branding, marketing and automation built for African businesses.",
    jsonLd: [faqSchema(HOME_FAQS)],
  },
  {
    route: "/about",
    output: path.join(root, "about", "index.html"),
    fragment: "_about.html",
    title: "About BrandVibe | Strategy, Systems & Growth",
    description:
      "Meet BrandVibe: a Nairobi-based branding, marketing and automation team helping growth-minded businesses across Kenya and East Africa build brands that perform.",
    canonical: "https://brandvibe.co.ke/about",
    keywords: "about BrandVibe, branding agency Kenya, marketing team Nairobi",
    ogTitle: "About BrandVibe",
    ogDescription: "Strategy-first branding and marketing. Online and offline. Real results, plain-English reporting.",
    twitterTitle: "About BrandVibe",
    twitterDescription: "Strategy-first branding, marketing & automation team in Nairobi.",
    jsonLd: [breadcrumb("About", "/about")],
  },
  {
    route: "/services",
    output: path.join(root, "services", "index.html"),
    fragment: "_services.html",
    title: "Marketing Services in Kenya | BrandVibe",
    description:
      "Branding, digital marketing, social media, PR, business development and automation packages in Kenya. Monthly retainers from KSh 30,000 — tailored to your growth goals.",
    canonical: "https://brandvibe.co.ke/services",
    keywords: "marketing services Kenya, branding packages Nairobi, digital marketing agency, social media management Kenya, PR agency Kenya, business automation",
    ogTitle: "BrandVibe Services & Pricing",
    ogDescription: "Marketing packages built around your goals. Clear deliverables. Transparent pricing.",
    twitterTitle: "Marketing Services in Kenya | BrandVibe",
    twitterDescription: "Branding, digital, PR, social, automation. Monthly retainers from KSh 30,000.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            serviceType: "Branding and Marketing Agency Services",
            provider: { "@id": ORG_ID },
            areaServed: ["Nairobi", "Kenya", "East Africa"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BrandVibe Services",
              itemListElement: [
                "Smart Business Automation", "PR & Communications", "Digital Marketing",
                "Social Media Strategy", "Influencer Marketing", "Business Development",
                "Content Production", "Monthly Marketing Retainers",
              ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
            },
            offers: [
              { "@type": "Offer", name: "Starter Retainer", price: "30000", priceCurrency: "KES", priceSpecification: { "@type": "UnitPriceSpecification", price: "30000", priceCurrency: "KES", unitText: "MONTH" } },
              { "@type": "Offer", name: "Growth Retainer", price: "60000", priceCurrency: "KES", priceSpecification: { "@type": "UnitPriceSpecification", price: "60000", priceCurrency: "KES", unitText: "MONTH" } },
              { "@type": "Offer", name: "Premium Retainer", price: "120000", priceCurrency: "KES", priceSpecification: { "@type": "UnitPriceSpecification", price: "120000", priceCurrency: "KES", unitText: "MONTH" } },
            ],
          },
          faqSchema(SERVICES_FAQS),
          breadcrumb("Services", "/services"),
        ],
      },
    ],
  },
  {
    route: "/portfolio",
    output: path.join(root, "portfolio", "index.html"),
    fragment: "_portfolio.html",
    title: "BrandVibe Portfolio | Client Growth Stories",
    description:
      "Branding, marketing and automation case studies from BrandVibe — challenge, solution and outcome across healthcare, SaaS, EdTech, NGOs and more in Kenya.",
    canonical: "https://brandvibe.co.ke/portfolio",
    keywords: "BrandVibe portfolio, marketing case studies Kenya, branding work Nairobi",
    ogTitle: "BrandVibe Portfolio & Case Studies",
    ogDescription: "Selected client case studies — challenge, solution, outcome.",
    twitterTitle: "BrandVibe Portfolio | Client Growth Stories",
    twitterDescription: "Branding, marketing & automation case studies across 6 industries.",
    jsonLd: [breadcrumb("Portfolio", "/portfolio")],
  },
  {
    route: "/autovibe",
    output: path.join(root, "autovibe", "index.html"),
    fragment: "_autovibe.html",
    title: "AutoVibe | Smart Business Automation Solutions in Kenya",
    description:
      "AutoVibe builds custom business automation in Kenya — lead capture, WhatsApp bots, CRM, HR onboarding and invoicing. Projects from KSh 70,000.",
    canonical: "https://brandvibe.co.ke/autovibe",
    keywords: "business automation Kenya, WhatsApp bot Kenya, CRM automation Nairobi, AutoVibe BrandVibe",
    ogTitle: "AutoVibe — Smart Business Automation",
    ogDescription: "Custom automation for lead capture, WhatsApp, CRM, HR and invoicing. Built in 4 weeks.",
    twitterTitle: "AutoVibe | Smart Business Automation Solutions",
    twitterDescription: "Lead capture, WhatsApp bots, CRM, HR & invoicing — built in 4 weeks.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            name: "AutoVibe — Smart Business Automation",
            serviceType: "Business Process Automation",
            provider: { "@id": ORG_ID },
            areaServed: ["Kenya", "East Africa", "Africa"],
            offers: { "@type": "Offer", price: "70000", priceCurrency: "KES" },
          },
          faqSchema(AUTOVIBE_FAQS),
          breadcrumb("AutoVibe", "/autovibe"),
        ],
      },
    ],
  },
  {
    route: "/contact",
    output: path.join(root, "contact", "index.html"),
    fragment: "_contact.html",
    title: "Contact BrandVibe | Book a Strategy Consultation",
    description:
      "Contact BrandVibe in Nairobi for branding, digital marketing, business development and automation. Book a free strategy call — we reply within 48 hours.",
    canonical: "https://brandvibe.co.ke/contact",
    keywords: "contact BrandVibe, branding agency contact Nairobi, marketing consultation Kenya",
    ogTitle: "Contact BrandVibe",
    ogDescription: "Book a free strategy consultation or request a tailored quote.",
    twitterTitle: "Contact BrandVibe | Book a Strategy Consultation",
    twitterDescription: "Book a free strategy call or request a tailored quote.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "ContactPage",
            name: "Contact BrandVibe",
            url: "https://brandvibe.co.ke/contact",
            about: { "@id": ORG_ID },
          },
          breadcrumb("Contact", "/contact"),
        ],
      },
    ],
  },
  {
    route: "/blog",
    output: path.join(root, "blog", "index.html"),
    fragment: "_blog.html",
    title: "Marketing Insights & Business Growth Resources | BrandVibe",
    description:
      "Articles on branding, digital marketing, PR, business development and business automation — practical growth insights for Kenyan and African businesses.",
    canonical: "https://brandvibe.co.ke/blog",
    keywords: "marketing blog Kenya, branding insights Africa, digital marketing tips Nairobi, business growth resources",
    ogTitle: "BrandVibe Blog",
    ogDescription: "Insights on marketing, PR, automation and growth — built for African businesses.",
    twitterTitle: "Marketing Insights & Business Growth Resources",
    twitterDescription: "Practical articles on branding, marketing, PR & automation.",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Blog",
            name: "BrandVibe Blog",
            url: "https://brandvibe.co.ke/blog",
            publisher: { "@id": ORG_ID },
            about: ["marketing", "PR", "business automation", "NGO communications", "business growth"],
          },
          breadcrumb("Blog", "/blog"),
        ],
      },
    ],
  },
];

// ── HTML transform helpers ─────────────────────────────────────────────────

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
}

function setMetaName(html, name, content) {
  const escaped = content.replace(/"/g, "&quot;");
  const pattern = new RegExp(`<meta\\s+name=["']${name}["'][^>]*>`, "i");
  const tag = `<meta name="${name}" content="${escaped}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace(/(<\/title>)/i, `$1\n    ${tag}`);
}

function setMetaProperty(html, property, content) {
  const escaped = content.replace(/"/g, "&quot;");
  const pattern = new RegExp(`<meta\\s+property=["']${property}["'][^>]*>`, "i");
  const tag = `<meta property="${property}" content="${escaped}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace(/(<\/title>)/i, `$1\n    ${tag}`);
}

function insertCanonical(html, canonical) {
  if (html.includes('rel="canonical"')) {
    return html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${canonical}" />`);
  }
  return html.replace(/(<\/title>)/i, `$1\n    <link rel="canonical" href="${canonical}" />`);
}

function insertJsonLd(html, schemas) {
  if (!schemas || schemas.length === 0) return html;
  const tags = schemas
    .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
    .join("\n    ");
  return html.replace(/(<\/head>)/i, `    ${tags}\n  $1`);
}

// ── Build each page ────────────────────────────────────────────────────────

async function buildPage(page) {
  const pageTemplate = await fs.readFile(templatePath, "utf8");
  const fragmentPath = path.join(fragmentsDir, page.fragment);
  const fragmentHtml = await fs.readFile(fragmentPath, "utf8");

  let html = pageTemplate;

  // Primary meta
  html = setTitle(html, page.title);
  html = setMetaName(html, "description", page.description);
  if (page.keywords) html = setMetaName(html, "keywords", page.keywords);

  // Canonical
  html = insertCanonical(html, page.canonical);

  // Open Graph
  html = setMetaProperty(html, "og:url", page.canonical);
  html = setMetaProperty(html, "og:title", page.ogTitle);
  html = setMetaProperty(html, "og:description", page.ogDescription);

  // Twitter / X
  html = setMetaName(html, "twitter:title", page.twitterTitle);
  html = setMetaName(html, "twitter:description", page.twitterDescription);
  if (page.ogImage) {
    html = setMetaProperty(html, "og:image", page.ogImage);
    html = setMetaProperty(html, "og:image:width", page.ogImageWidth || "1200");
    html = setMetaProperty(html, "og:image:height", page.ogImageHeight || "630");
    html = setMetaName(html, "twitter:image", page.ogImage);
  }

  // Page-specific JSON-LD
  if (page.jsonLd?.length) html = insertJsonLd(html, page.jsonLd);

  // Inject pre-rendered fragment into root div
  html = html.replace(
    /<div id="root"><\/div>/i,
    `<div id="root">${fragmentHtml}</div>`
  );

  await fs.mkdir(path.dirname(page.output), { recursive: true });
  await fs.writeFile(page.output, html, "utf8");
  console.log(`  ✓ ${page.route}`);
}

async function run() {
  console.log("Prerendering pages…");
  try {
    await Promise.all(pages.map(buildPage));
    console.log(`Prerender complete — ${pages.length} pages.`);
  } catch (error) {
    console.error("Prerender failed:", error);
    process.exit(1);
  }
}

run();
