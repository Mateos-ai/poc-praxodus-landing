import type { NextConfig } from "next";

// Static-export mode is enabled only when NEXT_OUTPUT_EXPORT=1 (used by CI for
// GitHub Pages). Normal `next dev` / `next build` are unaffected.
const isExport = process.env.NEXT_OUTPUT_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  ...(isExport
    ? {
        // Static export for GitHub Pages. The `/` -> `/en` redirect is handled
        // by public/index.html (redirects() is unsupported in export mode).
        output: "export",
        basePath,
        trailingSlash: true,
      }
    : {
        // Dev / server build: redirect the root to the default locale so
        // `npm run dev` works at http://localhost:3000/.
        async redirects() {
          return [{ source: "/", destination: "/en", permanent: false }];
        },
      }),
};

export default nextConfig;
