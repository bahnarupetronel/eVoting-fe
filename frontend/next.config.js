/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  images: {
    // loader: "akamai",
    // path: "",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "evoting-licenta.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.optimization.providedExports = true;
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),
    };
    return config;
  },
};

// module.exports = nextConfig;
