import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/git-enel",
  assetPrefix: "/git-enel",
};

export default nextConfig;
