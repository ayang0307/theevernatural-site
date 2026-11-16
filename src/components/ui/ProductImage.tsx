import type { Product } from "../../data/products";
import { asset } from "../../lib/asset";
import BottleIllustration from "./BottleIllustration";

export default function ProductImage({ product, className = "" }: { product: Product; className?: string }) {
  if (product.image) {
    return <img src={asset(product.image)} alt={product.name} className={`object-contain ${className}`} loading="lazy" />;
  }
  return <BottleIllustration product={product} className={className} />;
}
