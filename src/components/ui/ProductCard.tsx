import { Link } from "react-router-dom";
import { formatUSD, formLabel, type Product } from "../../data/products";
import ProductImage from "./ProductImage";
import PayPalButton from "./PayPalButton";

const border = {
  green: "border-leaf shadow-card-green",
  yellow: "border-gold shadow-card-yellow",
  blue: "border-brazil shadow-card-blue",
};

export default function ProductCard({ product, withBuy = true }: { product: Product; withBuy?: boolean }) {
  return (
    <article className={`card-lift flex flex-col rounded-xl border-2 bg-white p-5 ${border[product.accent]}`}>
      <Link to={`/products/${product.slug}`} className="flex flex-1 flex-col items-center text-center">
        <ProductImage product={product} className="h-44 w-auto" />
        <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-forest/70">
          {formLabel[product.form]}
        </span>
        <h3 className="mt-1 text-2xl text-forest">{product.shortName}</h3>
        <p className="mt-2 text-base leading-relaxed text-ink/80">{product.tagline}</p>
        <p className="mt-3 font-display text-2xl text-ink">{formatUSD(product.unitPrice)}</p>
      </Link>
      {withBuy && (
        <div className="mt-4 border-t border-gray-200 pt-4">
          <PayPalButton product={product} compact />
        </div>
      )}
    </article>
  );
}
