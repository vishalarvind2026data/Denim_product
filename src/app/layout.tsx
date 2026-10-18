import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KUMAR — Haute Selvedge Denim & Leather Maison",
  description: "Where denim meets leather, character takes shape. Luxury selvedge denim jackets, trousers, and leather goods crafted with Indian bespoke tailoring.",
  keywords: ["KUMAR", "Luxury Denim", "Selvedge Denim", "Full Grain Leather", "Bespoke Fit", "Indian Craftsmanship"],
  openGraph: {
    title: "KUMAR — Haute Selvedge Denim & Leather",
    description: "Where denim meets leather, character takes shape. Rooted in Indian craftsmanship.",
    url: "https://kumar.luxury",
    siteName: "KUMAR",
    images: [
      {
        url: "/images/editorial/runway-hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "KUMAR Luxury Denim and Leather",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-bg text-ink selection:bg-accent selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
