/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "assets.example.com",
      "lh3.googleusercontent.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
