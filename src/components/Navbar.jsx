import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/10 bg-cloud/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-ink">
          Rashid Iddi
          <span className="text-signal">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `font-mono text-xs uppercase font-mono-tag tracking-widest transition-colors ${
                  isActive ? "text-signal" : "text-ink/60 hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/resume/Rashid-Iddi-CV.pdf"
            download
            className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase font-mono-tag tracking-widest text-cloud transition-colors hover:bg-signal"
          >
            Download CV
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-line/10 bg-cloud px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-mono text-sm uppercase font-mono-tag tracking-widest ${
                    isActive ? "text-signal" : "text-ink/70"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/resume/Rashid-Iddi-CV.pdf"
              download
              className="inline-flex w-fit items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase font-mono-tag tracking-widest text-cloud"
            >
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
