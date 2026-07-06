import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/docs/index.html", destination: "/docs", permanent: false },
      {
        source: "/docs/:section/index.html",
        destination: "/docs/:section",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/_sphinx/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
