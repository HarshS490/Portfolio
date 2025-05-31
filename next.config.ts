import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns: [new URL('https://picsum.photos/**'), new URL("https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/**")]
  }
};

export default nextConfig;
