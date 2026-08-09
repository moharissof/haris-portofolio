import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://harissofyan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Haris Sofyan — Software & Cloud Engineer",
  description: "Portfolio of Haris Sofyan, a Software and Cloud Engineer building reliable, production-ready digital products.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Haris Sofyan — Software & Cloud Engineer",
    description: "Reliable, production-ready software built with end-to-end ownership.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Haris Sofyan — Software & Cloud Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haris Sofyan — Software & Cloud Engineer",
    description: "Reliable, production-ready software built with end-to-end ownership.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
