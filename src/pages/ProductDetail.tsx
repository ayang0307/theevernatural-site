import { Link, Navigate, useParams } from "react-router-dom";
import Section from "../components/ui/Section";
import ProductImage from "../components/ui/ProductImage";
import PayPalButton from "../components/ui/PayPalButton";
import ProductCard from "../components/ui/ProductCard";
import Seo from "../components/ui/Seo";
import { formatUSD, formLabel, getProduct, products } from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  if (!product) return <Navigate to="/products" replace />;

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Seo title={product.shortName} description={product.tagline} />
      <Section>
        <nav className="mb-6 text-sm text-ink/60" aria-label="Breadcrumb">
          <Link to="/products" className="hover:text-forest hover:underline">Our Products</Link>
          <span className="mx-2">/</span>
          <span className="text-forest">{product.shortName}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="flex items-center justify-center rounded-2xl bg-cream-soft p-8 lg:col-span-2">
            <ProductImage product={product} className="h-80 w-auto" />
          </div>

          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-forest/70">
              {formLabel[product.form]}
            </span>
            <h1 className="mt-1 text-3xl text-forest sm:text-4xl">{product.name}</h1>
            <p className="mt-3 text-xl leading-relaxed text-ink/80">{product.tagline}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {product.highlights.map((h) => (
                <li key={h} className="rounded-full bg-honey/40 px-3 py-1 text-sm font-semibold text-forest">
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <p className="font-display text-4xl text-ink">{formatUSD(product.unitPrice)}</p>
              <p className="text-ink/70">
                {product.caseSize}: <span className="font-semibold text-ink">{formatUSD(product.casePrice)}</span>
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-forest/15 bg-white p-5 shadow-sm">
              <PayPalButton product={product} />
              <p className="mt-3 text-sm text-ink/60">
                Prefer a check or money order? See{" "}
                <Link to="/services" className="text-forest underline">payment &amp; shipping</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl text-forest">About this product</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed">
              {product.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {product.certifications && (
              <p className="mt-4 rounded-md bg-cream-soft px-4 py-3 font-semibold text-forest">
                {product.certifications}
              </p>
            )}
          </div>
          <div className="space-y-8">
            {product.indications && (
              <div>
                <h2 className="text-2xl text-forest">
                  {product.slug === "sunyata" || product.slug === "wax-green-capsules"
                    ? "Highlights"
                    : "Indicated and used in case of"}
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed">
                  {product.indications.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            )}
            {product.directions && (
              <div>
                <h2 className="text-2xl text-forest">Recommendations for use</h2>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed">
                  {product.directions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <p className="mt-10 text-sm leading-relaxed text-ink/60">
          These statements have not been evaluated by the Food and Drug Administration. This product is
          not intended to diagnose, treat, cure or prevent any disease.
        </p>
      </Section>

      <Section tone="cream">
        <h2 className="text-3xl text-forest">You may also like</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} withBuy={false} />
          ))}
        </div>
      </Section>
    </>
  );
}
