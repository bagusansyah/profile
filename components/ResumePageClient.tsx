"use client";

import { motion } from "framer-motion";
import { FileText, Briefcase, GraduationCap } from "lucide-react";

export default function ResumePageClient() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl"
    >
      <section className="mb-10">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-white">
          <FileText className="text-emerald-500" /> Resume Bagus Nadiansah
        </h1>
        <p className="mt-4 leading-7 text-neutral-400">
          Resume ini merangkum latar belakang pendidikan, keahlian utama, dan fokus
          profesional Bagus Nadiansah di bidang AI, full-stack development, dan
          implementasi aplikasi modern.
        </p>
      </section>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-neutral-300">
            <GraduationCap size={20} /> Education
          </h2>
          <div className="space-y-8 border-l-2 border-neutral-800 pl-6">
            <article className="relative">
              <div className="absolute -left-[31px] h-4 w-4 rounded-full border-4 border-neutral-950 bg-emerald-500" />
              <h3 className="text-lg font-medium text-white">Informatics Engineering</h3>
              <p className="mb-2 text-sm text-neutral-500">
                Institut Teknologi dan Bisnis Asia Malang • 2023 - Sekarang
              </p>
              <p className="text-sm leading-6 text-neutral-400">
                Mahasiswa semester 5 dengan fokus pada artificial intelligence dan web
                development. Aktif mengerjakan proyek computer vision, GIS, dan
                antarmuka web interaktif.
              </p>
            </article>
          </div>
        </section>

        <section>
          <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-neutral-300">
            <Briefcase size={20} /> Key Skills
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
              <h3 className="mb-2 font-bold text-white">Technical</h3>
              <ul className="list-disc space-y-1 pl-4 text-sm text-neutral-400">
                <li>Python untuk machine learning, automation, dan data processing</li>
                <li>React dan Next.js untuk modern web application development</li>
                <li>Node.js dan Express untuk backend API</li>
                <li>Flutter untuk pengembangan aplikasi mobile</li>
              </ul>
            </article>
            <article className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
              <h3 className="mb-2 font-bold text-white">Tools</h3>
              <ul className="list-disc space-y-1 pl-4 text-sm text-neutral-400">
                <li>Git dan GitHub untuk version control</li>
                <li>Figma untuk UI/UX exploration</li>
                <li>Blender untuk 3D motion design</li>
                <li>VS Code dan Google Colab untuk workflow development</li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
