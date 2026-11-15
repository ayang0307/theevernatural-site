import type { Product } from "../../data/products";

const accentFill = { green: "#3c9242", yellow: "#edc226", blue: "#002776" };

/** Simple illustrated bottle used when a product has no photo yet. */
export default function BottleIllustration({ product, className = "" }: { product: Product; className?: string }) {
  const accent = accentFill[product.accent];
  const label = product.shortName.toUpperCase();
  return (
    <svg viewBox="0 0 160 240" className={className} role="img" aria-label={`${product.shortName} bottle`}>
      <defs>
        <linearGradient id={`g-${product.slug}`} x1="0" x2="1">
          <stop offset="0" stopColor="#6b3f16" />
          <stop offset="0.5" stopColor="#a86a2b" />
          <stop offset="1" stopColor="#5a3312" />
        </linearGradient>
      </defs>
      {product.form === "spray" ? (
        <>
          <rect x="62" y="6" width="36" height="22" rx="4" fill="#1f1f1f" />
          <rect x="70" y="0" width="10" height="10" rx="2" fill="#1f1f1f" />
          <rect x="74" y="26" width="12" height="18" fill="#1f1f1f" />
        </>
      ) : (
        <>
          <rect x="58" y="4" width="44" height="30" rx="5" fill="#1f1f1f" />
          <rect x="70" y="32" width="20" height="14" fill="#333" />
        </>
      )}
      <path
        d="M46 60 C46 48 58 46 80 46 C102 46 114 48 114 60 L118 72 L118 222 C118 232 110 238 100 238 L60 238 C50 238 42 232 42 222 L42 72 Z"
        fill={`url(#g-${product.slug})`}
      />
      <rect x="54" y="96" width="52" height="86" rx="4" fill="#fff6e3" />
      <rect x="54" y="96" width="52" height="14" fill={accent} />
      <text
        x="80"
        y="132"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="8"
        fontWeight="700"
        fill="#214E34"
        textLength={Math.min(44, label.length * 5.2)}
        lengthAdjust="spacingAndGlyphs"
      >
        {label}
      </text>
      <text
        x="80"
        y="146"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="6"
        fill="#214E34"
        textLength="42"
        lengthAdjust="spacingAndGlyphs"
      >
        GREEN PROPOLIS
      </text>
      <circle cx="80" cy="166" r="7" fill={accent} opacity="0.85" />
      <path d="M80 160 l3 6 -3 6 -3 -6 z" fill="#fff6e3" />
      <ellipse cx="60" cy="120" rx="4" ry="40" fill="#fff" opacity="0.18" />
    </svg>
  );
}
