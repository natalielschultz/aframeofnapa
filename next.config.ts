import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/rates-availability", destination: "/availability", permanent: true },
      { source: "/aframehome", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
