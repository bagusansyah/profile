import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bagus Nadiansah | AI & Full-Stack Engineer",
  description: "Portfolio profesional Bagus Nadiansah.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-200`}>
        {/* Background Animation Global */}
        <div className="fixed inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-emerald-600 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Navbar Global */}
        <Navbar />

        {/* Konten Halaman Berubah di Sini */}
        <main className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32">
          {children}
        </main>
      </body>
    </html>
  );
}