import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  { to: "/services", label: "Services", end: false },
  { to: "/portfolio", label: "Portfolio", end: false },
  { to: "/blog", label: "Blog", end: false },
  { to: "/autovibe", label: "AutoVibe", end: false },
] as const;

export function SiteNav() {
  const location = useLocation();
  const isAutoVibe = location.pathname === "/autovibe";

  return (
    <nav
      id="mainNav"
      style={
        isAutoVibe
          ? {
              background: "rgba(30,20,15,0.95)",
              borderBottomColor: "rgba(255,255,255,0.06)",
            }
          : undefined
      }
    >
      <NavLink
        to="/"
        className="nav-logo"
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.2,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 22,
            fontWeight: 900,
            color: "var(--deep)",
            letterSpacing: "-0.5px",
          }}
        >
          Brand<span style={{ color: "var(--crimson)" }}>Vibe</span>
        </span>
        <span
          style={{
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-light)",
          }}
        >
          Strategy · Systems · Growth
        </span>
      </NavLink>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              style={isAutoVibe ? { color: "rgba(255,255,255,0.6)" } : undefined}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/contact" className="nav-cta">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
