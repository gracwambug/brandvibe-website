import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageShell } from "./components/PageShell";
import { SiteNav } from "./components/SiteNav";
import { SiteFooter } from "./components/SiteFooter";
import homeHtml from "./fragments/_home.html?raw";
import aboutHtml from "./fragments/_about.html?raw";
import autovibeHtml from "./fragments/_autovibe.html?raw";
import blogHtml from "./fragments/_blog.html?raw";
import contactHtml from "./fragments/_contact.html?raw";
import portfolioHtml from "./fragments/_portfolio.html?raw";
import servicesHtml from "./fragments/_services.html?raw";

function NotFoundPage() {
  return (
    <>
      <SiteNav />
      <main className="flex min-h-screen items-center justify-center bg-background px-4 py-16">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">
            Page not found
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The page you are looking for does not exist.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go home
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageShell html={homeHtml} />} />
        <Route path="/about" element={<PageShell html={aboutHtml} />} />
        <Route path="/autovibe" element={<PageShell html={autovibeHtml} />} />
        <Route path="/blog" element={<PageShell html={blogHtml} />} />
        <Route path="/contact" element={<PageShell html={contactHtml} />} />
        <Route path="/portfolio" element={<PageShell html={portfolioHtml} />} />
        <Route path="/services" element={<PageShell html={servicesHtml} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
