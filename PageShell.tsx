import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
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
  const path = useRouterState({ select: (s) => s.location.pathname });

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
    const t = setTimeout(() => window.brandvibeInit?.(), 50);
    // Handle in-page hash scroll
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0 });
    }
    return () => clearTimeout(t);
  }, [path]);

  return (
    <>
      <SiteNav />
      <div className="page active" dangerouslySetInnerHTML={{ __html: html }} />
      <SiteFooter />
    </>
  );
}
