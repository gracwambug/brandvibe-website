import fs from "fs/promises";
import path from "path";

const root = path.resolve("dist");
const templatePath = path.join(root, "index.html");
const fragmentsDir = path.resolve("src", "fragments");

const pages = [
  {
    route: "/",
    output: path.join(root, "index.html"),
    fragment: "_home.html",
    title: "BrandVibe | Branding & Marketing That Connects, Converts, Scales",
    description:
      "BrandVibe — Full-service branding and marketing agency. Strategy. Systems. Growth.",
    canonical: "https://brandvibe.co.ke/",
  },
  {
    route: "/about",
    output: path.join(root, "about", "index.html"),
    fragment: "_about.html",
    title: "About BrandVibe | Branding & Marketing Agency in Kenya",
    description:
      "Learn about BrandVibe — our values, approach, and how we help businesses grow with branding, marketing and automation.",
    canonical: "https://brandvibe.co.ke/about",
  },
  {
    route: "/services",
    output: path.join(root, "services", "index.html"),
    fragment: "_services.html",
    title: "BrandVibe Services | Strategy, Systems & Growth",
    description:
      "Explore BrandVibe service packages for marketing, automation and business growth. Pricing starts at KSh 30,000 per month.",
    canonical: "https://brandvibe.co.ke/services",
  },
  {
    route: "/portfolio",
    output: path.join(root, "portfolio", "index.html"),
    fragment: "_portfolio.html",
    title: "BrandVibe Portfolio | Creative Work & Case Studies",
    description:
      "See BrandVibe branding, marketing and campaign work across industries — creative strategy built to convert and scale.",
    canonical: "https://brandvibe.co.ke/portfolio",
  },
  {
    route: "/autovibe",
    output: path.join(root, "autovibe", "index.html"),
    fragment: "_autovibe.html",
    title: "AutoVibe | Business Automation & Growth Systems",
    description:
      "Discover AutoVibe automation from BrandVibe — automated growth systems for follow-ups, onboarding, and customer communication.",
    canonical: "https://brandvibe.co.ke/autovibe",
  },
  {
    route: "/contact",
    output: path.join(root, "contact", "index.html"),
    fragment: "_contact.html",
    title: "Contact BrandVibe | Start Your Marketing & Growth Plan",
    description:
      "Reach BrandVibe for brand strategy, marketing, automation or campaign support. Get a tailored quote and next steps.",
    canonical: "https://brandvibe.co.ke/contact",
  },
];

function updateTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
}

function updateDescription(html, description) {
  return html.replace(
    /<meta\s+name=["']description["'][^>]*>/i,
    `<meta name="description" content="${description}" />`
  );
}

function insertCanonical(html, canonical) {
  if (html.includes('rel="canonical"')) return html;
  const canonicalTag = `<link rel="canonical" href="${canonical}" />`;
  return html.replace(/(<\/title>)/i, `$1\n    ${canonicalTag}`);
}

async function buildPage(page) {
  const pageTemplate = await fs.readFile(templatePath, "utf8");
  const fragmentPath = path.join(fragmentsDir, page.fragment);
  const fragmentHtml = await fs.readFile(fragmentPath, "utf8");

  let outputHtml = pageTemplate;
  outputHtml = updateTitle(outputHtml, page.title);
  outputHtml = updateDescription(outputHtml, page.description);
  outputHtml = insertCanonical(outputHtml, page.canonical);
  outputHtml = outputHtml.replace(
    /<div id="root"><\/div>/i,
    `<div id="root">${fragmentHtml}</div>`
  );

  await fs.mkdir(path.dirname(page.output), { recursive: true });
  await fs.writeFile(page.output, outputHtml, "utf8");
  console.log(`Prerendered ${page.route} -> ${page.output}`);
}

async function run() {
  try {
    await Promise.all(pages.map(buildPage));
    console.log("Prerender complete.");
  } catch (error) {
    console.error("Prerender failed:", error);
    process.exit(1);
  }
}

run();
