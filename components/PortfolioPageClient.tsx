"use client";

import { motion } from "framer-motion";
import { FolderKanban, ExternalLink, Youtube } from "lucide-react";

const projects = [
  {
    title: "AI Image Classifier",
    desc: "Sistem object detection menggunakan YOLOv8 dan OpenCV untuk klasifikasi citra otomatis pada bola basket, bola voli, dan kok.",
    stack: ["Python", "TensorFlow", "YOLOv8", "OpenCV"],
    year: "2026",
    color: "bg-blue-500",
    link: "https://youtu.be/hIfwTa7wocg",
    type: "youtube",
  },
  {
    title: "GIS Mapping System",
    desc: "Aplikasi pemetaan geografis interaktif Kelurahan Gading Kasri untuk visualisasi data toko dan fasilitas umum.",
    stack: ["HTML", "CSS", "JavaScript", "Leaflet", "QGIS"],
    year: "2026",
    color: "bg-emerald-500",
    link: "https://bagusansyah.github.io/uassigfix/",
    type: "website",
  },
  {
    title: "3D Motion Design",
    desc: "Animasi logo 3D profesional menggunakan Blender dengan teknik hard surface modeling untuk kebutuhan branding.",
    stack: ["Blender", "Eevee Render"],
    year: "2026",
    color: "bg-orange-500",
    link: "https://youtu.be/UWYURhkLjuE",
    type: "youtube",
  },
  {
    title: "Cari Tim App",
    desc: "Aplikasi pencarian tim programmer berbasis web dengan fitur pencarian dan komunikasi terintegrasi Discord.",
    stack: ["Flutter", "Dart", "Firebase"],
    year: "2026",
    color: "bg-pink-500",
    link: "https://caritim-app.web.app/",
    type: "app",
  },
];

export default function PortfolioPageClient() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="mb-10 max-w-3xl">
        <h1 className="mb-4 flex items-center gap-3 text-3xl font-bold text-white">
          <FolderKanban className="text-purple-500" /> Portfolio Bagus Nadiansah
        </h1>
        <p className="leading-7 text-neutral-400">
          Koleksi proyek pilihan di bidang AI, computer vision, GIS, web development,
          dan desain visual. Halaman ini dirancang sebagai landing page portfolio yang
          mudah dipahami recruiter, klien, dan mesin pencari.
        </p>
      </section>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all hover:border-neutral-600 hover:bg-neutral-800/60"
          >
            <div className="mb-4 flex items-start justify-between">
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${project.color} font-bold text-white`}>
                {project.title[0]}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-neutral-800 p-1.5 text-neutral-400 transition-colors hover:bg-red-600 hover:text-white"
                  title={`Open ${project.title}`}
                  aria-label={`Open project ${project.title}`}
                >
                  {project.type === "youtube" ? <Youtube size={16} /> : <ExternalLink size={16} />}
                </a>

                <span className="rounded border border-neutral-800 px-2 py-1 font-mono text-xs text-neutral-500">
                  {project.year}
                </span>
              </div>
            </div>

            <h2 className="mb-2 text-xl font-bold transition-colors group-hover:text-purple-400">
              {project.title}
            </h2>
            <p className="mb-4 text-sm leading-6 text-neutral-400">{project.desc}</p>

            <div className="mt-auto flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-neutral-800 bg-neutral-950 px-2 py-1 text-xs text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
