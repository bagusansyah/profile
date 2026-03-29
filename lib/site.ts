export const siteConfig = {
  name: "Bagus Nadiansah",
  title: "Bagus Nadiansah | AI & Full-Stack Engineer",
  description:
    "Portfolio profesional Bagus Nadiansah, AI dan Full-Stack Engineer yang berfokus pada pengembangan web, integrasi AI, computer vision, dan sistem interaktif.",
  locale: "id_ID",
  keywords: [
    "Bagus Nadiansah",
    "AI Engineer Indonesia",
    "Full-Stack Engineer",
    "Portfolio Web Developer",
    "Next.js Developer",
    "React Developer",
    "Computer Vision",
    "Machine Learning",
    "Web Development",
    "Portfolio Profesional",
  ],
  socialImage: "/opengraph-image",
};

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!configuredUrl) {
    return "http://localhost:3000";
  }

  return configuredUrl.startsWith("http")
    ? configuredUrl
    : `https://${configuredUrl}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, getSiteUrl()).toString();
}
