import { useState } from "react";
import Section from "../components/ui/Section";
import HighlightTitle from "../components/ui/HighlightTitle";
import ProductCard from "../components/ui/ProductCard";
import Seo from "../components/ui/Seo";
import { formLabel, products, type ProductForm } from "../data/products";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { site } from "../data/site";

const forms: ("all" | ProductForm)[] = ["all", "drops", "capsules", "softgels", "spray"];

export default function Products() {
  const [filter, setFilter] = useState<"all" | ProductForm>("all");
  const list = filter === "all" ? products : products.filter((p) => p.form === filter);

  return (
    <>
      <Seo title="Our Products" description="Brazilian green propolis drops, capsules, softgels and spray. Single bottles and wholesale cases." />
      <Section>
        <HighlightTitle as="h1">Our Products Are #1!</HighlightTitle>
        <p className="mt-6 max-w-3xl text-lg leading-loose md:text-xl">
          Every product is Brazilian Green Propolis, imported directly from Brazil and shipped from New
          Jersey. Pay securely with PayPal, or see our{" "}
          <Link to="/services" className="text-forest underline decoration-honey decoration-2 underline-offset-4">
            other payment options
          </Link>
          . Buying in bulk? Visit the{" "}
          <Link to="/wholesale" className="text-forest underline decoration-honey decoration-2 underline-offset-4">
            wholesale page
          </Link>
          .
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by type">
          {forms.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full border-2 px-4 py-1.5 font-display text-base transition ${
                filter === f ? "border-forest bg-forest text-cream-soft" : "border-forest/30 text-forest hover:border-forest"
              }`}
            >
              {f === "all" ? "All" : formLabel[f]}
            </button>
          ))}
          </div>
          <Button href={site.links.ebay} variant="secondary" className="self-start px-5 py-2 text-base">
            Shop on eBay
          </Button>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
