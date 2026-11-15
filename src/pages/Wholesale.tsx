import { Link } from "react-router-dom";
import Section from "../components/ui/Section";
import HighlightTitle from "../components/ui/HighlightTitle";
import PayPalButton from "../components/ui/PayPalButton";
import Seo from "../components/ui/Seo";
import { formatUSD, products } from "../data/products";
import { phoneHref, site } from "../data/site";

export default function Wholesale() {
  return (
    <>
      <Seo title="Wholesale" description="Wholesale case pricing for Brazilian green propolis." />
      <Section>
        <HighlightTitle as="h1">Wholesale</HighlightTitle>
        <p className="mt-6 max-w-3xl text-lg leading-loose md:text-xl">
          Case pricing for retailers, clinics and families who stock up. Choose the case option on any
          product's PayPal button, or{" "}
          <Link to="/contact" className="text-forest underline decoration-honey decoration-2 underline-offset-4">
            contact us
          </Link>{" "}
          for larger orders.
        </p>

        <div className="mt-10 overflow-x-auto rounded-xl border border-forest/15">
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-forest text-cream-soft">
              <tr>
                <th className="px-4 py-3 font-display text-lg font-normal">Product</th>
                <th className="px-4 py-3 font-display text-lg font-normal">Case size</th>
                <th className="px-4 py-3 font-display text-lg font-normal">Per unit</th>
                <th className="px-4 py-3 font-display text-lg font-normal">Case price</th>
                <th className="px-4 py-3 font-display text-lg font-normal">Order</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.slug} className={i % 2 ? "bg-cream-soft/60" : "bg-white"}>
                  <td className="px-4 py-3">
                    <Link to={`/products/${p.slug}`} className="font-semibold text-forest hover:underline">
                      {p.shortName}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{p.caseSize}</td>
                  <td className="px-4 py-3">{formatUSD(p.unitPrice)}</td>
                  <td className="px-4 py-3 font-display text-xl">{formatUSD(p.casePrice)}</td>
                  <td className="px-4 py-3">
                    <PayPalButton product={p} compact defaultChoice="case" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 rounded-xl bg-cream-soft p-6">
          <h2 className="text-2xl text-forest">Questions about bulk orders?</h2>
          <p className="mt-2 text-lg">
            Call{" "}
            {site.phones.map((p, i) => (
              <span key={p}>
                <a href={phoneHref(p)} className="text-forest underline">{p}</a>
                {i === 0 ? " or " : ""}
              </span>
            ))}{" "}
            or email <a href={`mailto:${site.email}`} className="text-forest underline">{site.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
