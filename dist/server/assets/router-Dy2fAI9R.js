import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
const appCss = "/assets/styles-dmktHnhc.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BrandVibe | Branding & Marketing That Connects, Converts, Scales" },
      {
        name: "description",
        content: "BrandVibe — Full-service branding and marketing agency. Strategy. Systems. Growth."
      },
      { name: "author", content: "BrandVibe" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap"
      },
      { rel: "stylesheet", href: "/brandvibe.css" },
      { rel: "stylesheet", href: appCss }
    ],
    scripts: [
      {
        defer: true,
        "data-domain": "brandvibe.co.ke",
        src: "https://plausible.io/js/script.tagged-events.js"
      },
      {
        children: "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};"
      },
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-WS9F2F7GM9"
      },
      {
        children: "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-WS9F2F7GM9',{send_page_view:true});"
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://brandvibe.co.ke/#organization",
              name: "BrandVibe",
              url: "https://brandvibe.co.ke/",
              logo: "https://brandvibe.co.ke/favicon.ico",
              description: "BrandVibe is a full-service branding, marketing and business automation agency based in Nairobi, Kenya, helping organisations across East Africa grow with clarity, consistency and measurable results.",
              email: "info@brandvibe.co.ke",
              areaServed: ["Kenya", "East Africa", "Africa"],
              sameAs: [
                "https://www.linkedin.com/company/brandvibeltd/",
                "https://www.instagram.com/_brandvibe/",
                "https://www.tiktok.com/@brandvibe.ke"
              ]
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://brandvibe.co.ke/#localbusiness",
              name: "BrandVibe",
              url: "https://brandvibe.co.ke/",
              image: "https://brandvibe.co.ke/favicon.ico",
              priceRange: "KSh 30,000+",
              telephone: "+254-700-000-000",
              email: "info@brandvibe.co.ke",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressRegion: "Nairobi",
                addressCountry: "KE"
              },
              areaServed: ["Nairobi", "Kenya", "East Africa"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00"
                }
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://brandvibe.co.ke/#website",
              url: "https://brandvibe.co.ke/",
              name: "BrandVibe",
              publisher: { "@id": "https://brandvibe.co.ke/#organization" },
              inLanguage: "en"
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const BASE_URL = "https://brandvibe.co.ke";
const Route$8 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/autovibe", changefreq: "monthly", priority: "0.8" },
          { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$6 = () => import("./services-BaS7Z87F.js");
const SERVICES_FAQS = [{
  q: "What services does BrandVibe offer?",
  a: "BrandVibe offers branding and brand strategy, social media marketing, digital marketing campaigns, content marketing, influencer marketing, PR and communications, business development support, smart business automation, and marketing consultancy."
}, {
  q: "Do you offer customized marketing solutions?",
  a: "Yes. Every business is different. We tailor our recommendations, campaigns, and growth systems based on your industry, goals, target audience, and budget."
}, {
  q: "How do I get started with BrandVibe?",
  a: "You can submit an inquiry through our contact form or schedule a strategy consultation. We'll learn about your business and recommend the most suitable growth approach."
}, {
  q: "Can BrandVibe manage our social media accounts?",
  a: "Yes. We provide social media strategy, content planning, content creation, publishing, community management, campaign support, and performance reporting."
}, {
  q: "What platforms do you manage?",
  a: "We support Facebook, Instagram, LinkedIn, TikTok, X (Twitter), YouTube, and WhatsApp Business."
}, {
  q: "Can BrandVibe help generate leads and sales?",
  a: "Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth."
}, {
  q: "Do you offer influencer marketing?",
  a: "Yes. We help brands identify suitable influencers, manage collaborations, coordinate campaigns, and track campaign performance."
}, {
  q: "Do you provide PR and communications services?",
  a: "Yes. We support media relations, press releases, communication planning, reputation management, and public engagement strategies."
}, {
  q: "How long does it take to see results?",
  a: "Results vary depending on your industry, goals, competition, and marketing activities. Some campaigns generate early traction within weeks, while long-term growth initiatives require consistent execution over several months."
}, {
  q: "Do you provide reporting?",
  a: "Yes. We provide regular performance reporting and insights so you can understand what is working and where opportunities for improvement exist."
}, {
  q: "What is a digital marketing agency?",
  a: "A digital marketing agency helps businesses attract customers online through social media marketing, content marketing, advertising, search engine optimization, and digital growth strategies."
}, {
  q: "How do I choose the right marketing agency?",
  a: "Look for an agency with relevant experience, a clear strategy, measurable processes, transparent communication, and a proven ability to support business growth."
}, {
  q: "Why choose BrandVibe?",
  a: "BrandVibe combines strategy, marketing, automation, business development, and growth-focused execution to help organizations build sustainable results rather than short-term visibility alone."
}, {
  q: "What's included in a monthly retainer?",
  a: "Every retainer includes a dedicated point of contact, monthly strategy and reporting, content production, scheduled publishing and optimisation. Specific deliverables scale with the package you choose."
}, {
  q: "Can I customise a package?",
  a: "Yes. The Starter / Growth / Premium tiers are starting points. We tailor scope and pricing to your goals."
}, {
  q: "How much do your marketing packages cost?",
  a: "Monthly retainers start at KSh 30,000 (Starter), KSh 60,000 (Growth) and KSh 120,000 (Premium). AutoVibe automation projects start at KSh 70,000 and are quoted per scope."
}];
const SERVICES_LIST = ["Smart Business Automation", "PR & Communications", "Digital Marketing", "Social Media Strategy", "Influencer Marketing", "Business Development", "Content Production", "Monthly Marketing Retainers"];
const Route$7 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Marketing Services in Kenya | BrandVibe"
    }, {
      name: "description",
      content: "Branding, digital marketing, social media, PR, business development and automation packages in Kenya. Monthly retainers from KSh 30,000 — tailored to your growth goals."
    }, {
      property: "og:title",
      content: "BrandVibe Services & Pricing"
    }, {
      property: "og:description",
      content: "Marketing packages built around your goals. Clear deliverables. Transparent pricing."
    }, {
      property: "og:url",
      content: "https://brandvibe.co.ke/services"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Marketing Services in Kenya | BrandVibe"
    }, {
      name: "twitter:description",
      content: "Branding, digital, PR, social, automation. Monthly retainers from KSh 30,000."
    }],
    links: [{
      rel: "canonical",
      href: "https://brandvibe.co.ke/services"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Service",
          serviceType: "Branding and Marketing Agency Services",
          provider: {
            "@id": "https://brandvibe.co.ke/#organization"
          },
          areaServed: ["Nairobi", "Kenya", "East Africa"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "BrandVibe Services",
            itemListElement: SERVICES_LIST.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s
              }
            }))
          },
          offers: [{
            "@type": "Offer",
            name: "Starter Retainer",
            price: "30000",
            priceCurrency: "KES",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "30000",
              priceCurrency: "KES",
              unitText: "MONTH"
            }
          }, {
            "@type": "Offer",
            name: "Growth Retainer",
            price: "60000",
            priceCurrency: "KES",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "60000",
              priceCurrency: "KES",
              unitText: "MONTH"
            }
          }, {
            "@type": "Offer",
            name: "Premium Retainer",
            price: "120000",
            priceCurrency: "KES",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "120000",
              priceCurrency: "KES",
              unitText: "MONTH"
            }
          }]
        }, {
          "@type": "FAQPage",
          mainEntity: SERVICES_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a
            }
          }))
        }, {
          "@type": "BreadcrumbList",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://brandvibe.co.ke/"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://brandvibe.co.ke/services"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./portfolio-Cl45CHjQ.js");
const Route$6 = createFileRoute("/portfolio")({
  head: () => ({
    meta: [{
      title: "BrandVibe Portfolio | Client Growth Stories"
    }, {
      name: "description",
      content: "Branding, marketing and automation case studies from BrandVibe — challenge, solution and outcome across healthcare, SaaS, EdTech, NGOs and more in Kenya."
    }, {
      property: "og:title",
      content: "BrandVibe Portfolio & Case Studies"
    }, {
      property: "og:description",
      content: "Selected client case studies — challenge, solution, outcome."
    }, {
      property: "og:url",
      content: "https://brandvibe.co.ke/portfolio"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "BrandVibe Portfolio | Client Growth Stories"
    }, {
      name: "twitter:description",
      content: "Branding, marketing & automation case studies across 6 industries."
    }],
    links: [{
      rel: "canonical",
      href: "https://brandvibe.co.ke/portfolio"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://brandvibe.co.ke/"
        }, {
          "@type": "ListItem",
          position: 2,
          name: "Portfolio",
          item: "https://brandvibe.co.ke/portfolio"
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-DJ9sgdwn.js");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact BrandVibe | Book a Strategy Consultation"
    }, {
      name: "description",
      content: "Contact BrandVibe in Nairobi for branding, digital marketing, business development and automation. Book a free strategy call — we reply within 48 hours."
    }, {
      property: "og:title",
      content: "Contact BrandVibe"
    }, {
      property: "og:description",
      content: "Book a free strategy consultation or request a tailored quote."
    }, {
      property: "og:url",
      content: "https://brandvibe.co.ke/contact"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Contact BrandVibe | Book a Strategy Consultation"
    }, {
      name: "twitter:description",
      content: "Book a free strategy call or request a tailored quote."
    }],
    links: [{
      rel: "canonical",
      href: "https://brandvibe.co.ke/contact"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "ContactPage",
          name: "Contact BrandVibe",
          url: "https://brandvibe.co.ke/contact",
          about: {
            "@id": "https://brandvibe.co.ke/#organization"
          }
        }, {
          "@type": "BreadcrumbList",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://brandvibe.co.ke/"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Contact",
            item: "https://brandvibe.co.ke/contact"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./blog-CSP8lNTD.js");
const Route$4 = createFileRoute("/blog")({
  head: () => ({
    meta: [{
      title: "Marketing Insights & Business Growth Resources | BrandVibe"
    }, {
      name: "description",
      content: "Articles on branding, digital marketing, PR, business development and business automation — practical growth insights for Kenyan and African businesses."
    }, {
      property: "og:title",
      content: "BrandVibe Blog"
    }, {
      property: "og:description",
      content: "Insights on marketing, PR, automation and growth — built for African businesses."
    }, {
      property: "og:url",
      content: "https://brandvibe.co.ke/blog"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "Marketing Insights & Business Growth Resources"
    }, {
      name: "twitter:description",
      content: "Practical articles on branding, marketing, PR & automation."
    }],
    links: [{
      rel: "canonical",
      href: "https://brandvibe.co.ke/blog"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Blog",
          name: "BrandVibe Blog",
          url: "https://brandvibe.co.ke/blog",
          publisher: {
            "@id": "https://brandvibe.co.ke/#organization"
          },
          about: ["marketing", "PR", "business automation", "NGO communications", "business growth"]
        }, {
          "@type": "BreadcrumbList",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://brandvibe.co.ke/"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://brandvibe.co.ke/blog"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./autovibe-DYMhLnsH.js");
const AUTOVIBE_FAQS = [{
  q: "What is Smart Business Automation?",
  a: "Smart Business Automation uses technology to automate repetitive business processes such as lead management, follow-ups, appointment booking, reporting, customer communication, and workflow management."
}, {
  q: "What is business automation?",
  a: "Business automation uses technology to streamline repetitive tasks, improve efficiency, reduce manual work, and create better customer experiences."
}, {
  q: "How can business automation help my company?",
  a: "Automation can help manage leads, automate follow-ups, improve customer communication, streamline operations, and save valuable time."
}, {
  q: "What can you automate?",
  a: "Lead capture and follow-up sequences, WhatsApp Business API chatbots, CRM and pipeline workflows, invoice and payment reminders, HR onboarding flows, and marketing automation (email, scheduling, re-engagement, reporting)."
}, {
  q: "How long does a typical AutoVibe project take?",
  a: "About 4 weeks from kickoff to handover: workflow audit, system design, build and testing, then training and handover with documentation."
}, {
  q: "How much does AutoVibe cost?",
  a: "Projects start from KSh 70,000 and are quoted per scope. Pricing depends on the number of automations, tools to integrate, workflow complexity and whether you want ongoing support."
}, {
  q: "Do you offer ongoing support?",
  a: "Yes. After handover we offer optional monthly support and maintenance plans, plus on-demand changes when your processes evolve."
}, {
  q: "Can BrandVibe help generate leads and sales?",
  a: "Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth."
}, {
  q: "Do you work with businesses outside Nairobi?",
  a: "Yes. We support clients across Kenya and East Africa through both remote and in-person engagements."
}, {
  q: "How do I get started with BrandVibe?",
  a: "You can submit an inquiry through our contact form or schedule a strategy consultation. We'll learn about your business and recommend the most suitable growth approach."
}, {
  q: "Why choose BrandVibe?",
  a: "BrandVibe combines strategy, marketing, automation, business development, and growth-focused execution to help organizations build sustainable results rather than short-term visibility alone."
}];
const Route$3 = createFileRoute("/autovibe")({
  head: () => ({
    meta: [{
      title: "AutoVibe | Smart Business Automation Solutions"
    }, {
      name: "description",
      content: "AutoVibe builds custom business automation in Kenya — lead capture, WhatsApp bots, CRM, HR onboarding and invoicing. Projects from KSh 70,000."
    }, {
      property: "og:title",
      content: "AutoVibe — Smart Business Automation"
    }, {
      property: "og:description",
      content: "Custom automation for lead capture, WhatsApp, CRM, HR and invoicing. Built in 4 weeks."
    }, {
      property: "og:url",
      content: "https://brandvibe.co.ke/autovibe"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "AutoVibe | Smart Business Automation Solutions"
    }, {
      name: "twitter:description",
      content: "Lead capture, WhatsApp bots, CRM, HR & invoicing — built in 4 weeks."
    }],
    links: [{
      rel: "canonical",
      href: "https://brandvibe.co.ke/autovibe"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "Service",
          name: "AutoVibe — Smart Business Automation",
          serviceType: "Business Process Automation",
          provider: {
            "@id": "https://brandvibe.co.ke/#organization"
          },
          areaServed: ["Kenya", "East Africa", "Africa"],
          offers: {
            "@type": "Offer",
            price: "70000",
            priceCurrency: "KES"
          }
        }, {
          "@type": "FAQPage",
          mainEntity: AUTOVIBE_FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a
            }
          }))
        }, {
          "@type": "BreadcrumbList",
          itemListElement: [{
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://brandvibe.co.ke/"
          }, {
            "@type": "ListItem",
            position: 2,
            name: "AutoVibe",
            item: "https://brandvibe.co.ke/autovibe"
          }]
        }]
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DQiYjX8G.js");
const breadcrumb = (name, path) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: "https://brandvibe.co.ke/"
  }, {
    "@type": "ListItem",
    position: 2,
    name,
    item: `https://brandvibe.co.ke${path}`
  }]
});
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About BrandVibe | Strategy, Systems & Growth"
    }, {
      name: "description",
      content: "Meet BrandVibe: a Nairobi-based branding, marketing and automation team helping growth-minded businesses across Kenya and East Africa build brands that perform."
    }, {
      property: "og:title",
      content: "About BrandVibe"
    }, {
      property: "og:description",
      content: "Strategy-first branding and marketing. Online and offline. Real results, plain-English reporting."
    }, {
      property: "og:url",
      content: "https://brandvibe.co.ke/about"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "About BrandVibe"
    }, {
      name: "twitter:description",
      content: "Strategy-first branding, marketing & automation team in Nairobi."
    }],
    links: [{
      rel: "canonical",
      href: "https://brandvibe.co.ke/about"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(breadcrumb("About", "/about"))
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Bu0d-a5O.js");
const HOME_FAQS = [{
  q: "What does BrandVibe do?",
  a: "BrandVibe is a branding, marketing, and business growth agency that helps organizations increase visibility, generate leads, strengthen their brand presence, and build sustainable growth systems through strategy, marketing, automation, and business development."
}, {
  q: "Who does BrandVibe work with?",
  a: "We work with startups, SMEs, NGOs, educational institutions, healthcare organizations, government projects, and growing businesses across Kenya and East Africa."
}, {
  q: "What services does BrandVibe offer?",
  a: "BrandVibe offers branding and brand strategy, social media marketing, digital marketing campaigns, content marketing, influencer marketing, PR and communications, business development support, smart business automation, and marketing consultancy."
}, {
  q: "Do you offer customized marketing solutions?",
  a: "Yes. Every business is different. We tailor our recommendations, campaigns, and growth systems based on your industry, goals, target audience, and budget."
}, {
  q: "How do I get started with BrandVibe?",
  a: "You can submit an inquiry through our contact form or schedule a strategy consultation. We'll learn about your business and recommend the most suitable growth approach."
}, {
  q: "Do you work with businesses outside Nairobi?",
  a: "Yes. We support clients across Kenya and East Africa through both remote and in-person engagements."
}, {
  q: "Can BrandVibe manage our social media accounts?",
  a: "Yes. We provide social media strategy, content planning, content creation, publishing, community management, campaign support, and performance reporting."
}, {
  q: "What platforms do you manage?",
  a: "We support Facebook, Instagram, LinkedIn, TikTok, X (Twitter), YouTube, and WhatsApp Business."
}, {
  q: "What is Smart Business Automation?",
  a: "Smart Business Automation uses technology to automate repetitive business processes such as lead management, follow-ups, appointment booking, reporting, customer communication, and workflow management."
}, {
  q: "Can BrandVibe help generate leads and sales?",
  a: "Yes. Our strategies are designed to increase brand visibility, attract qualified prospects, improve customer engagement, and support business growth."
}, {
  q: "Do you offer influencer marketing?",
  a: "Yes. We help brands identify suitable influencers, manage collaborations, coordinate campaigns, and track campaign performance."
}, {
  q: "Do you provide PR and communications services?",
  a: "Yes. We support media relations, press releases, communication planning, reputation management, and public engagement strategies."
}, {
  q: "How long does it take to see results?",
  a: "Results vary depending on your industry, goals, competition, and marketing activities. Some campaigns generate early traction within weeks, while long-term growth initiatives require consistent execution over several months."
}, {
  q: "Can I customise a package?",
  a: "Yes. The Starter / Growth / Premium tiers are starting points. We tailor scope and pricing to your goals."
}, {
  q: "How much do your marketing packages cost?",
  a: "Monthly retainers start at KSh 30,000 (Starter), KSh 60,000 (Growth) and KSh 120,000 (Premium). AutoVibe automation projects start at KSh 70,000 and are quoted per scope."
}];
const Route$1 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "BrandVibe | Branding, Marketing & Growth Agency in Kenya"
    }, {
      name: "description",
      content: "BrandVibe is a Nairobi-based full-service branding, marketing and automation agency serving Kenya and East Africa. Strategy, content, digital campaigns and AutoVibe automation — built for growth."
    }, {
      name: "keywords",
      content: "branding agency Nairobi, marketing agency Kenya, digital marketing Nairobi, business automation Kenya, AutoVibe, PR agency Nairobi, social media agency Kenya"
    }, {
      property: "og:title",
      content: "BrandVibe | Strategy · Systems · Growth"
    }, {
      property: "og:description",
      content: "Full-service branding, marketing and automation agency in Nairobi, Kenya."
    }, {
      property: "og:url",
      content: "https://brandvibe.co.ke/"
    }, {
      property: "og:type",
      content: "website"
    }, {
      property: "og:site_name",
      content: "BrandVibe"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "BrandVibe | Strategy · Systems · Growth"
    }, {
      name: "twitter:description",
      content: "Branding, marketing and automation built for African businesses."
    }],
    links: [{
      rel: "canonical",
      href: "https://brandvibe.co.ke/"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: HOME_FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(4e3),
  business: z.string().trim().max(200).optional().default(""),
  phone: z.string().trim().max(50).optional().default(""),
  service: z.string().trim().max(120).optional().default(""),
  _gotcha: z.string().optional().default("")
});
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let raw;
        try {
          raw = await request.json();
        } catch {
          return json({ ok: false, error: "Invalid JSON" }, 400);
        }
        const parsed = ContactSchema.safeParse(raw);
        if (!parsed.success) {
          return json(
            { ok: false, error: "Validation failed", issues: parsed.error.issues },
            400
          );
        }
        const data = parsed.data;
        if (data._gotcha) return json({ ok: true });
        console.log("[contact] new enquiry", {
          name: data.name,
          email: data.email,
          business: data.business,
          phone: data.phone,
          service: data.service,
          message: data.message.slice(0, 500),
          at: (/* @__PURE__ */ new Date()).toISOString()
        });
        return json({ ok: true });
      }
    }
  }
});
const SitemapDotxmlRoute = Route$8.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$9
});
const ServicesRoute = Route$7.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$9
});
const PortfolioRoute = Route$6.update({
  id: "/portfolio",
  path: "/portfolio",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const BlogRoute = Route$4.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$9
});
const AutovibeRoute = Route$3.update({
  id: "/autovibe",
  path: "/autovibe",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const ApiContactRoute = Route.update({
  id: "/api/contact",
  path: "/api/contact",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AutovibeRoute,
  BlogRoute,
  ContactRoute,
  PortfolioRoute,
  ServicesRoute,
  SitemapDotxmlRoute,
  ApiContactRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
