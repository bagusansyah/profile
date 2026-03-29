import type { Metadata } from "next";

import ResumePageClient from "@/components/ResumePageClient";
import StructuredData from "@/components/StructuredData";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume Bagus Nadiansah berisi pendidikan, skill utama, dan fokus profesional di bidang AI, web development, dan full-stack engineering.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: `Resume | ${siteConfig.name}`,
    description:
      "Lihat latar belakang pendidikan dan skill utama Bagus Nadiansah sebagai AI dan Full-Stack Engineer.",
    url: absoluteUrl("/resume"),
    images: [absoluteUrl(siteConfig.socialImage)],
  },
};

export default function Resume() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Resume Bagus Nadiansah",
    url: absoluteUrl("/resume"),
    inLanguage: "id-ID",
    mainEntity: {
      "@type": "Person",
      name: "Bagus Nadiansah",
      jobTitle: "AI & Full-Stack Engineer",
      alumniOf: "Institut Teknologi dan Bisnis Asia Malang",
    },
  };

  return (
    <>
      <StructuredData data={jsonLd} />
      <ResumePageClient />
    </>
  );
}
