/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve the static homepage from public/home.html at the root URL.
  // beforeFiles is required so this rewrite intercepts / before
  // app/page.tsx is matched. afterFiles (default) wouldn't fire
  // because Next.js matches the app router page first.
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/home.html' },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};
module.exports = nextConfig;
