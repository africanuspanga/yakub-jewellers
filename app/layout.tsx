import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: `${site.name} — Tanzanite, Gold & Silver Jewellery`,
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/images/hero-tanzanite-set.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#5c0a18",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
