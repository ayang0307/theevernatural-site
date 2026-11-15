import { Link } from "react-router-dom";
import { nav, phoneHref, site } from "../../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 bg-forest text-cream-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <img src="/brand/logo.png" alt="" className="mb-4 w-32 rounded bg-white/90 p-2" />
          <p className="max-w-xs text-base leading-relaxed text-cream-soft/90">
            {site.legalName} strives to deliver the best in high-value, affordably priced
            products. Brazilian Green Propolis, shipped from {site.address.city},{" "}
            {site.address.state}.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl text-gold">Explore</h3>
          <ul className="space-y-1.5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="hover:text-gold hover:underline">
                Shipping &amp; Returns
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl text-gold">Connect With Us</h3>
          <address className="space-y-1.5 not-italic">
            <p>
              {site.address.street}, {site.address.city} {site.address.state} {site.address.zip}
            </p>
            {site.phones.map((p) => (
              <p key={p}>
                <a href={phoneHref(p)} className="hover:text-gold hover:underline">
                  {p}
                </a>
              </p>
            ))}
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-gold hover:underline">
                {site.email}
              </a>
            </p>
          </address>
          <div className="mt-4 flex gap-3">
            <a
              href={site.links.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-gold hover:text-forest"
            >
              Facebook
            </a>
            <a
              href={site.links.ebay}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-gold hover:text-forest"
            >
              eBay Store
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-cream-soft/70">
        Copyright © {year} {site.legalName} All Rights Reserved.
      </div>
    </footer>
  );
}
