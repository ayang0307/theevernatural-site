import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// The GitHub Pages workflow passes --base=/<repo>/ on the CLI; local dev and a
// custom-domain deploy use the default "/".
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
