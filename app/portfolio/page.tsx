"use client";
import { motion } from "framer-motion";
import { FolderKanban, ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Image Classifier",
      desc: "Sistem klasifikasi citra menggunakan Python dan Computer Vision untuk deteksi objek otomatis pada buah apel segar dan busuk.",
      stack: ["Python", "YOLOv8", "OpenCV"],
      year: "2026",
      color: "bg-blue-500"
    },
    {
      title: "GIS Mapping System",
      desc: "Aplikasi pemetaan geografis interaktif Kelurahan Gading Kasri untuk visualisasi data fasilitas umum dan infrastruktur.",
      stack: ["React", "Leaflet", "QGIS"],
      year: "2026",
      color: "bg-emerald-500"
    },
    {
      title: "3D Motion Design",
      desc: "Animasi logo 3D profesional menggunakan Blender dengan teknik hard surface modeling untuk kebutuhan branding.",
      stack: ["Blender", "Cycles Render"],
      year: "2026",
      color: "bg-orange-500"
    }
    // Tambahkan project lain disini
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        <FolderKanban className="text-purple-500" /> Selected Works
      </h2>

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-neutral-900/40 border border-neutral-800 hover:border-neutral-600 rounded-2xl p-6 transition-all hover:bg-neutral-800/60"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`w-10 h-10 ${project.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                {project.title[0]}
              </div>
              <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded">{project.year}</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{project.desc}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.stack.map(tech => (
                <span key={tech} className="text-xs px-2 py-1 bg-neutral-950 border border-neutral-800 rounded text-neutral-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}