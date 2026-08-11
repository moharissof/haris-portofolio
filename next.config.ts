import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep development HMR state separate from production builds. Running
  // `next build` must never overwrite the cache used by an active preview.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
