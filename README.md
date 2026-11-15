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
| Business details (address, phones, email, store links) | `src/data/site.ts` |
| Product catalog, prices, descriptions | `src/data/products.ts` |
| Colors, fonts, spacing tokens | `src/index.css` (`@theme` block) |
| Pages | `src/pages/` |
| Shared layout (header, footer) | `src/components/layout/` |
| Brand images | `public/brand/` |

To add a real product photo, drop the image in `public/products/` and set `image: "/products/<file>.jpg"` on that product in `src/data/products.ts`. Products without an image use the built‑in illustrated bottle.
