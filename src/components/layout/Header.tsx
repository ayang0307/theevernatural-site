import { useEffect, useRef, useState } from "react";
import { asset } from "../../lib/asset";
import { Link, NavLink } from "react-router-dom";
import { nav } from "../../data/site";

export default function Header() {
  const lastY = useRef(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 75 || lastY.current > y) setVisible(true);
      else if (!open) setVisible(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const linkBase =
    "rounded px-3 py-2 font-display text-lg transition duration-300 hover:bg-black/5";
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? "text-forest underline decoration-honey decoration-2 underline-offset-4" : "text-ink"}`;

  return (
    <header
      className={`sticky top-0 z-[100] bg-cream shadow-sm transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
        <Link to="/" onClick={() => setOpen(false)} aria-label="The Ever Natural home">
          <img
            src={asset("/brand/logo.png")}
            alt="The Ever Natural"
            className="h-auto w-28 select-none md:w-32 lg:w-40"
            draggable={false}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded p-2 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            className={`h-8 w-8 transition-transform duration-300 ${open ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full origin-top overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          open ? "max-h-screen scale-y-100 opacity-100" : "max-h-0 scale-y-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col font-display text-xl" aria-label="Mobile">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `w-full border-t-2 border-gray-100 py-4 text-center hover:bg-gray-100 ${
                  isActive ? "text-forest" : "text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
