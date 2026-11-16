/** Prefixes a public/ path with Vite's base URL so it works on a subpath deploy (GitHub Pages). */
export function asset(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
