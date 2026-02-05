"use client";
import { motion } from "framer-motion";
import { FolderKanban, ExternalLink, Github, Youtube } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Image Classifier",
      desc: "Sistem Object Detection menggunakan YOLOv8 dan OpenCV untuk klasifikasi citra otomatis untuk Bola Basket, Bola Voli, dan Kok.",
      stack: ["Python", "TensorFlow", "YOLOv8", "OpenCV"],
      year: "2026",
      color: "bg-blue-500",
      link: "https://youtu.be/hIfwTa7wocg",
      type: "youtube"
    },
    {
      title: "GIS Mapping System",
      desc: "Aplikasi pemetaan geografis interaktif Kelurahan Gading Kasri untuk visualisasi data Toko dan fasilitas umum.",
      stack: ["HTML","CSS","JavaScript", "Leaflet", "QGIS"],
      year: "2026",
      color: "bg-emerald-500",
      link: "https://bagusansyah.github.io/uassigfix/",
      type: "QGIS"
    },
    {
      title: "3D Motion Design",
      desc: "Animasi logo 3D profesional menggunakan Blender dengan teknik hard surface modeling untuk kebutuhan branding.",
      stack: ["Blender", "Evee Render"],
      year: "2026",
      color: "bg-orange-500",
      link: "https://youtu.be/UWYURhkLjuE",
      type: "youtube"
    }
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

              {/* 3. Container untuk Tahun dan Link */}
              <div className="flex items-center gap-2">
                
                {/* Logika Rendering Link */}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-1.5 bg-neutral-800 rounded text-neutral-400 hover:text-white hover:bg-red-600 transition-colors"
                    title="Watch Demo"
                  >
                    {/* Jika tipenya youtube pakai icon Youtube, jika tidak pakai ExternalLink */}
                    {project.type === 'youtube' ? <Youtube size={16} /> : <ExternalLink size={16} />}
                  </a>
                )}

                <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded">
                  {project.year}
                </span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
              {project.desc}
            </p>
            
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