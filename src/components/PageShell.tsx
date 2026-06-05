import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

interface PageProps {
  html: string;
}

declare global {
  interface Window {
    brandvibeInit?: () => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function PageShell({ html }: PageProps) {
  const location = useLocation();

  // Disable browser scroll restoration — we manage scroll position manually
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  }, []);

  // Load brandvibe.js once, then re-init on each subsequent navigation
  useEffect(() => {
    if (document.getElementById("brandvibe-script")) {
      window.brandvibeInit?.();
      return;
    }
    const s = document.createElement("script");
    s.id = "brandvibe-script";
    s.src = "/brandvibe.js";
    document.body.appendChild(s);
  }, []);

  // Scroll to top or to hash anchor on every route/hash change
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      const t = window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 120);
      const u = window.setTimeout(() => window.brandvibeInit?.(), 50);
      return () => {
        window.clearTimeout(t);
        window.clearTimeout(u);
      };
    } else {
      window.scrollTo(0, 0);
      const t = window.setTimeout(() => window.brandvibeInit?.(), 50);
      return () => window.clearTimeout(t);
    }
  }, [location.pathname, location.hash]);

  // Fire GA4 page_view on every SPA navigation
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-WS9F2F7GM9", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);

  return (
    <>
      <SiteNav />
      <div className="page active" dangerouslySetInnerHTML={{ __html: html }} />
      <SiteFooter />
    </>
  );
}
