import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useRouterState, Link } from "@tanstack/react-router";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/autovibe", label: "AutoVibe" }
];
function SiteNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isAutoVibe = path === "/autovibe";
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      id: "mainNav",
      style: isAutoVibe ? {
        background: "rgba(30,20,15,0.95)",
        borderBottomColor: "rgba(255,255,255,0.06)"
      } : void 0,
      children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/",
            className: "nav-logo",
            style: {
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.2,
              textDecoration: "none"
            },
            children: [
              /* @__PURE__ */ jsxs(
                "span",
                {
                  style: {
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 22,
                    fontWeight: 900,
                    color: "var(--deep)",
                    letterSpacing: "-0.5px"
                  },
                  children: [
                    "Brand",
                    /* @__PURE__ */ jsx("span", { style: { color: "var(--crimson)" }, children: "Vibe" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  style: {
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-light)"
                  },
                  children: "Strategy · Systems · Growth"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("ul", { className: "nav-links", children: [
          links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            Link,
            {
              to: l.to,
              activeOptions: { exact: l.to === "/" },
              activeProps: { className: "active" },
              style: isAutoVibe ? { color: "rgba(255,255,255,0.6)" } : void 0,
              children: l.label
            }
          ) }, l.to)),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "nav-cta", children: "Contact" }) })
        ] })
      ]
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-inner", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              style: {
                fontFamily: "'Playfair Display',serif",
                fontSize: 20,
                fontWeight: 900,
                color: "var(--deep)"
              },
              children: [
                "Brand",
                /* @__PURE__ */ jsx("span", { style: { color: "var(--crimson)" }, children: "Vibe" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-light)"
              },
              children: "Strategy · Systems · Growth"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "footer-tagline", children: "Marketing that looks good and performs better" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-links", children: [
        /* @__PURE__ */ jsx(Link, { to: "/services", children: "Services" }),
        /* @__PURE__ */ jsx(Link, { to: "/portfolio", children: "Portfolio" }),
        /* @__PURE__ */ jsx(Link, { to: "/blog", children: "Blog" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Contact" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-socials", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.tiktok.com/@brandvibe.ke",
            target: "_blank",
            rel: "noreferrer",
            className: "social-icon",
            title: "TikTok",
            "aria-label": "TikTok",
            children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.78 1.52V6.82a4.85 4.85 0 01-1.01-.13z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.instagram.com/_brandvibe/",
            target: "_blank",
            rel: "noreferrer",
            className: "social-icon",
            title: "Instagram",
            "aria-label": "Instagram",
            children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }) })
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://www.linkedin.com/company/brandvibeltd/",
            target: "_blank",
            rel: "noreferrer",
            className: "social-icon",
            title: "LinkedIn",
            "aria-label": "LinkedIn",
            children: /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "footer-copy", children: "© 2026 Brand Vibe. All rights reserved." })
  ] });
}
function PageShell({ html }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
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
  useEffect(() => {
    const t = setTimeout(() => window.brandvibeInit?.(), 50);
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsx("div", { className: "page active", dangerouslySetInnerHTML: { __html: html } }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  PageShell as P
};
