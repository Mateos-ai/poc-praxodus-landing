import type { NextConfig } from "next";

// Static-export mode is enabled only when NEXT_OUTPUT_EXPORT=1 (used by CI for
// GitHub Pages). Normal `next dev` / `next build` are unaffected.
const isExport = process.env.NEXT_OUTPUT_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  ...(isExport
    ? {
        output: "export",
        basePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
