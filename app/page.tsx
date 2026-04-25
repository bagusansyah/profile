import type { Metadata } from "next";

import HomePageClient from "@/components/HomePageClient";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AI & Full-Stack Engineer",
  description:
    "Profil profesional Bagus Nadiansah sebagai AI dan Full-Stack Engineer dengan pengalaman di Next.js, React, Node.js, Python, dan computer vision.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    images: [absoluteUrl(siteConfig.socialImage)],
  },
  twitter: {
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.socialImage)],
  },
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Bagus Nadiansah",
      jobTitle: "AI & Full-Stack Engineer",
      description: siteConfig.description,
      image: absoluteUrl("/profilePicture.jpg"),
      url: absoluteUrl("/"),
      sameAs: [
        "https://github.com/bagusansyah/",
        "https://www.linkedin.com/in/bagusnadiansah/",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malang",
        addressCountry: "ID",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: absoluteUrl("/"),
      description: siteConfig.description,
      inLanguage: "id-ID",
    },
  ];

  return (
    <>
      <StructuredData data={jsonLd} />
      <HomePageClient />
    </>
  );
}
