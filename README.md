# The Ever Natural

Website for [theevernatural.com](https://theevernatural.com) — Brazilian green propolis, imported directly from Brazil and shipped from Boonton, New Jersey.

## Stack

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (theme tokens live in `src/index.css`)
- [React Router](https://reactrouter.com) for pages

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/ (also writes dist/404.html for static-host SPA fallback)
npm run preview   # serve the production build locally
```

## Where things live

| What | Where |
| --- | --- |
| Business details (address, phones, email, store links, nav) | `src/data/site.ts` |
| Product catalog, prices, descriptions, PayPal button IDs | `src/data/products.ts` |
| Educational copy (what is propolis, quality, health benefits) | `src/data/learn.ts` |
| Colors, fonts, spacing tokens | `src/index.css` (`@theme` block) |
| Pages | `src/pages/` |
| Shared layout (header, footer) | `src/components/layout/` |
| Brand images | `public/brand/` |

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, welcome, "packed with", Brazil, featured products, connect |
| `/products` | All products with type filter and PayPal add-to-cart |
| `/products/:slug` | Product detail with unit/case PayPal options |
| `/wholesale` | Case pricing table |
| `/learn` | What is propolis, why Brazilian, quality, health benefits, video |
| `/about`, `/contact`, `/services` | Story, contact details, payment/shipping/returns |

## Checkout

Checkout uses the PayPal hosted "Add to Cart" buttons from the original site. Each product's `paypal` block in `src/data/products.ts` holds the hosted button ID and the exact option values PayPal expects, so prices are ultimately controlled in the PayPal account, not here. Update both places when a price changes.

To add a real product photo, drop the image in `public/products/` and set `image: "/products/<file>.jpg"` on that product in `src/data/products.ts`. Products without an image use the built‑in illustrated bottle.
