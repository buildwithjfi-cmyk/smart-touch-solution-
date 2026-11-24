const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/shop/refurbished-washing-machines', destination: '/services/washing-machine', permanent: true },
      { source: '/shop/refurbished-refrigerators', destination: '/services/refrigerator', permanent: true },
      { source: '/shop', destination: '/services', permanent: true },
      { source: '/shop/:path*', destination: '/services', permanent: true },
      { source: '/about/quality-inspection', destination: '/about/pricing-policy', permanent: true },
    ];
  },
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
