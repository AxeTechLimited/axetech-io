/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve the static homepage from public/home.html at the root URL.
  // Static files in /public/ take precedence over app/page.tsx via rewrite.
  async rewrites() {
    return [
      { source: '/', destination: '/home.html' },
    ];
  },
};
module.exports = nextConfig;
