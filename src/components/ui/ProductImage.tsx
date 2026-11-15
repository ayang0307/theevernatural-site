import type { Product } from "../../data/products";
import BottleIllustration from "./BottleIllustration";

export default function ProductImage({ product, className = "" }: { product: Product; className?: string }) {
  if (product.image) {
    return <img src={product.image} alt={product.name} className={`object-contain ${className}`} loading="lazy" />;
  }
  return <BottleIllustration product={product} className={className} />;
}
