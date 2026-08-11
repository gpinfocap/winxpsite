/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["img.shields.io"],
    // Netlify's image optimizer (IPX) 502s on Node 24 -- its Lambda still uses a
    // callback-based handler, which AWS dropped support for. These are all small
    // static PNG icons, so serve them as-is instead of routing through /_next/image.
    unoptimized: true,
  },
};
