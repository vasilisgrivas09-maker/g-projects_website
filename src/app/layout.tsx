import type { Metadata } from "next";
// @ts-ignore
import "./globals.css"; // βεβαιώσου ότι υπάρχει το αρχείο globals.css

export const metadata: Metadata = {
  title: "Website G Projects",
  description: "Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}