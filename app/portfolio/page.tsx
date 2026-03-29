import type { Metadata } from "next";

import PortfolioPageClient from "@/components/PortfolioPageClient";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio proyek Bagus Nadiansah yang menampilkan AI image classifier, GIS mapping system, motion design, dan aplikasi berbasis Flutter.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: `Portfolio | ${siteConfig.name}`,
    description:
      "Lihat proyek AI, GIS, web, dan motion design dari Bagus Nadiansah.",
    url: absoluteUrl("/portfolio"),
    images: [absoluteUrl(siteConfig.socialImage)],
  },
};

export default function Portfolio() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio Bagus Nadiansah",
    url: absoluteUrl("/portfolio"),
    description:
      "Halaman portfolio yang berisi proyek AI, GIS, web development, dan desain visual.",
    inLanguage: "id-ID",
  };

  return (
    <>
      <StructuredData data={jsonLd} />
      <PortfolioPageClient />
    </>
  );
}
