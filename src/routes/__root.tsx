import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BrandVibe | Branding & Marketing That Connects, Converts, Scales" },
      {
        name: "description",
        content:
          "BrandVibe — Full-service branding and marketing agency. Strategy. Systems. Growth.",
      },
      { name: "author", content: "BrandVibe" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: "/brandvibe.css" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        defer: true,
        "data-domain": "brandvibe.co.ke",
        src: "https://plausible.io/js/script.tagged-events.js",
      },
      {
        children:
          "window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)};",
      },
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-WS9F2F7GM9",
      },
      {
        children:
          "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','G-WS9F2F7GM9',{send_page_view:true});",
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
              description:
                "BrandVibe is a full-service branding, marketing and business automation agency based in Nairobi, Kenya, helping organisations across East Africa grow with clarity, consistency and measurable results.",
              email: "info@brandvibe.co.ke",
              areaServed: ["Kenya", "East Africa", "Africa"],
              sameAs: [
                "https://www.linkedin.com/company/brandvibeltd/",
                "https://www.instagram.com/_brandvibe/",
                "https://www.tiktok.com/@brandvibe.ke",
              ],
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
                addressCountry: "KE",
              },
              areaServed: ["Nairobi", "Kenya", "East Africa"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "17:00",
                },
              ],
            },
            {
              "@type": "WebSite",
              "@id": "https://brandvibe.co.ke/#website",
              url: "https://brandvibe.co.ke/",
              name: "BrandVibe",
              publisher: { "@id": "https://brandvibe.co.ke/#organization" },
              inLanguage: "en",
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
