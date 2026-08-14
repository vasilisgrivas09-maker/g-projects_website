// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    
    // ΠΡΟΣΘΗΚΗ 1: Οι απομακρυσμένες εικόνες (αν έχεις εικόνες από άλλα sites ή APIs)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Αυτό επιτρέπει εικόνες από ΟΠΟΙΟΔΗΠΟΤΕ domain. Για ασφάλεια μπορείς να βάλεις το δικό σου domain.
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  
  // ΠΡΟΣΘΗΚΗ 2: Cache headers για τα στατικά αρχεία (Κάνει το site να φορτώνει αστραπή στους επισκέπτες)
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ΠΡΟΣΘΗΚΗ 3: Αν χρησιμοποιείς το Output Standalone για deployment σε Docker/VPS
  // output: "standalone", 
};

export default nextConfig;
