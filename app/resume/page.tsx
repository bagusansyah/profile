"use client";
import { motion } from "framer-motion";
import { FileText, Download, Briefcase, GraduationCap } from "lucide-react";

export default function Resume() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto">
      
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <FileText className="text-emerald-500" /> Resume
        </h2>
      </div>

      <div className="space-y-12">
        {/* Education Section */}
        <section>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-neutral-300">
            <GraduationCap size={20} /> Education
          </h3>
          <div className="pl-6 border-l-2 border-neutral-800 space-y-8">
            <div className="relative">
              <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-emerald-500 border-4 border-neutral-950"></div>
              <h4 className="text-lg font-medium text-white">Informatics Engineering</h4>
              <p className="text-neutral-500 text-sm mb-2">Universitas Institut Teknologi dan Bisnis Asia Malang • 2023 - Sekarang</p>
              <p className="text-neutral-400 text-sm">
                Mahasiswa Semester 5 dengan fokus pada Artificial Intelligence dan Web Development.
                Aktif dalam proyek-proyek praktikum Computer Vision dan GIS.
              </p>
            </div>
          </div>
          
        </section>

        {/* Experience / Skills Section */}
        <section>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-neutral-300">
            <Briefcase size={20} /> Key Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
              <h4 className="font-bold text-white mb-2">Technical</h4>
              <ul className="text-sm text-neutral-400 space-y-1 list-disc pl-4">
                <li>Python (Machine Learning, Pandas)</li>
                <li>React & Next.js Ecosystem</li>
                <li>Node.js & Express</li>
                <li>Flutter (Mobile Dev)</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-800">
              <h4 className="font-bold text-white mb-2">Tools</h4>
              <ul className="text-sm text-neutral-400 space-y-1 list-disc pl-4">
                <li>Git & GitHub</li>
                <li>Figma (UI/UX)</li>
                <li>Blender (3D Motion)</li>
                <li>VS Code & Google Colab</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

    </motion.div>
  );
}