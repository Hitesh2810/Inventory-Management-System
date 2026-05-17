/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: ".next-build",
  experimental: {
    optimizePackageImports: ["lucide-react", "recharts", "framer-motion"]
  }
};

module.exports = nextConfig;
