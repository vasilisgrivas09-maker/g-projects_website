import type { Metadata } from "next";
import { Manrope, EB_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "greek"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
});

const ebGaramond = EB_Garamond({
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  preload: false,
});

import { SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "G Projects | Interior Design & Custom Furniture",
    template: "%s | G Projects",
  },
  description:
    "Σχεδιάζουμε και υλοποιούμε εσωτερικούς χώρους με ακρίβεια, υλικά υψηλής ποιότητας και διαχρονική αισθητική.",
  keywords: [
    "interior design",
    "custom furniture",
    "renovation",
    "Greece",
    "εσωτερικός σχεδιασμός",
    "ανακαίνιση",
  ],
  openGraph: {
    title: "G Projects | Spaces with Character",
    description:
      "Woodworking & renovation services — από την ιδέα στην πραγματικότητα.",
    url: SITE_URL,
    siteName: "G Projects",
    locale: "el_GR",
    type: "website",
    images: [{ url: "/images/hero.webp", width: 1920, height: 1080, alt: "G Projects interior" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${manrope.variable} ${ebGaramond.variable}`} data-scroll-behavior="smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-mobile.webp"
          type="image/webp"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
      </head>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
