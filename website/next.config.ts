import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Sphinx assets use relative paths (_static/...). The browser must be on
      // /docs/index.html (or a nested .html path) so those resolve under /docs/.
      { source: "/docs", destination: "/docs/index.html", permanent: false },
      { source: "/docs/", destination: "/docs/index.html", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/docs/:path*",
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
