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
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://zamjywugdhbcluhulzef.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbWp5d3VnZGhiY2x1aHVsemVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYzOTM0MTQsImV4cCI6MTk3MTk2OTQxNH0.9Te88JXn0DQsw5XaqHte_C28VIiypg3KI2gTZVfc_2Q",
  },
};

module.exports = nextConfig;
