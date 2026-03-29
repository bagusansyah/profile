import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { absoluteUrl, getSiteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  category: "technology",
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: getSiteUrl(),
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.socialImage),
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.socialImage)],
  },
  verification: {
    google: "JEf6J3wnjl3L6KdGPfX7ZborBwfetVfQkqtS0_fQjTA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className="antialiased bg-neutral-950 text-neutral-200">
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-emerald-600 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        <Navbar />

        <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
          {children}
        </main>
      </body>
    </html>
  );
}
