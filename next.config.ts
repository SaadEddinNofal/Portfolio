import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;