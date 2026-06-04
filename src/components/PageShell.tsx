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
  }
}

export function PageShell({ html }: PageProps) {
  const location = useLocation();

  // Ensure brandvibe.js is loaded once
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

  // Re-init bindings whenever the route changes
  useEffect(() => {
    const t = window.setTimeout(() => window.brandvibeInit?.(), 50);
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0 });
    }
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      <SiteNav />
      <div className="page active" dangerouslySetInnerHTML={{ __html: html }} />
      <SiteFooter />
    </>
  );
}
