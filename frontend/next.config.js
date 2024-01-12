/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "evoting-licenta.s3.eu-central-1.amazonaws.com",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

// module.exports = nextConfig;
