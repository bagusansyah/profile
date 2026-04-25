"use client";

import type { ReactNode } from "react";

import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Code2,
  Terminal,
  Activity,
  Eye,
  GitFork,
  Star,
  Hash,
} from "lucide-react";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-36 w-full items-center justify-center rounded-lg bg-neutral-800/20 text-xs text-neutral-600 animate-pulse">
        Loading Contributions...
      </div>
    ),
  },
);

const user = {
  name: "Bagus Nadiansah",
  username: "bagusansyah",
  role: "AI & Full-Stack Engineer",
  bio: "Software Engineer yang fokus pada integrasi AI dan Web Development. Berpengalaman membangun sistem skalabel dengan React, Node.js, dan Python.",
  location: "Malang, Indonesia",
  joined: "Maret 2023",
  email: "bagusnadiansahpb@gmail.com",
  discordProfile: "https://discord.com/users/527742457853640725",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "TensorFlow",
    "Tailwind CSS",
    "Docker",
    "Figma",
    "PostgreSQL",
    "Flutter",
  ],
  featuredProjects: [
    {
      title: "AI Image Classifier",
      desc: "Sistem deteksi objek otomatis menggunakan YOLOv8 dan Python.",
      tags: ["Python", "AI", "OpenCV"],
      color: "bg-blue-500",
      link: "/portfolio",
    },
    {
      title: "GIS Mapping System",
      desc: "Visualisasi data geografis interaktif untuk pemetaan wilayah.",
      tags: ["React", "Leaflet", "GIS"],
      color: "bg-emerald-500",
      link: "/portfolio",
    },
  ],
  activities: [
    {
      action: "Deployed new version",
      target: "GIS System",
      time: "2 hours ago",
      icon: <Terminal size={14} />,
    },
    {
      action: "Starred repository",
      target: "nextjs-ai-starter",
      time: "5 hours ago",
      icon: <Star size={14} />,
    },
    {
      action: "Fixed bug",
      target: "Image Classification Model",
      time: "Yesterday",
      icon: <GitFork size={14} />,
    },
    {
      action: "Published article",
      target: "Medium: AI in 2026",
      time: "2 days ago",
      icon: <Activity size={14} />,
    },
  ],
};

export default function HomePageClient() {
  return (
    <div className="min-h-screen">
      <section className="mb-10 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Portfolio Profesional
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Bagus Nadiansah, AI & Full-Stack Engineer
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-300 md:text-lg">
          Website ini menampilkan profil profesional, portofolio proyek, dan resume
          Bagus Nadiansah. Fokus utamanya ada pada AI, computer vision, integrasi web,
          dan pengembangan aplikasi modern dengan Next.js, React, Node.js, dan Python.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <Link
            href="/portfolio"
            className="rounded-full bg-emerald-500 px-4 py-2 font-medium text-neutral-950 transition hover:bg-emerald-400"
          >
            Lihat Portfolio
          </Link>
          <Link
            href="/resume"
            className="rounded-full border border-neutral-700 px-4 py-2 font-medium text-neutral-200 transition hover:border-neutral-500 hover:bg-neutral-900"
          >
            Baca Resume
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 lg:col-span-4"
        >
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-neutral-100 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 shadow-2xl">
                <Image
                  src="/profilePicture.jpg"
                  alt={`Portrait of ${user.name}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h2 className="text-2xl font-bold text-white">{user.name}</h2>
              <p className="mb-4 font-medium text-emerald-400">{user.role}</p>

              <div className="mb-6 flex justify-center gap-3">
                <SocialLink href="https://github.com/bagusansyah/" label="GitHub profile">
                  <Github size={18} />
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/bagusnadiansah/"
                  label="LinkedIn profile"
                >
                  <Linkedin size={18} />
                </SocialLink>
                <SocialLink href={`mailto:${user.email}`} label="Send an email">
                  <Mail size={18} />
                </SocialLink>
                <SocialLink href={user.discordProfile} label="Discord profile">
                  <DiscordIcon size={18} />
                </SocialLink>
              </div>

              <div className="w-full space-y-3 border-t border-neutral-800 pt-6 text-left text-sm">
                <InfoRow icon={<MapPin size={16} />} label="Location" value={user.location} />
                <InfoRow icon={<Calendar size={16} />} label="Joined" value={user.joined} />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
            <h2 className="mb-4 flex items-center gap-2 font-bold text-white">
              <Terminal size={18} className="text-purple-500" /> Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs text-neutral-400 transition-colors hover:border-neutral-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </motion.aside>

        <div className="space-y-6 lg:col-span-8">
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
          >
            <h2 className="mb-3 text-xl font-bold text-white">About Me</h2>
            <p className="leading-relaxed text-neutral-400">{user.bio}</p>
          </motion.section>


          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6"
          >
            <h2 className="mb-6 flex items-center gap-2 font-bold text-white">
              <Github size={18} className="text-white" /> Contributions
            </h2>
            <div className="custom-scrollbar flex w-full justify-center overflow-x-auto pb-2">
              <GitHubCalendar
                username={user.username}
                colorScheme="dark"
                blockSize={13}
                blockMargin={4}
                fontSize={14}
                style={{ color: "#a3a3a3" }}
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-neutral-800 pt-3">
              <p className="text-xs text-neutral-500">
                Total contributions in the last year
              </p>
              <a
                href={`https://github.com/${user.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 transition-colors hover:text-emerald-300"
              >
                View GitHub Profile →
              </a>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="flex items-center gap-2 font-bold text-white">
                <Star size={18} className="text-yellow-500" /> Featured Projects
              </h2>
              {user.featuredProjects.map((project) => (
                <Link
                  key={project.title}
                  href={project.link}
                  className="group block rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 transition-all hover:border-neutral-600"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${project.color}`} />
                    <h3 className="font-semibold text-neutral-200 transition-colors group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="ml-auto text-neutral-600 group-hover:text-white"
                    />
                  </div>
                  <p className="mb-3 line-clamp-2 text-sm text-neutral-500">
                    {project.desc}
                  </p>
                  <div className="flex gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
              <Link
                href="/portfolio"
                className="block py-2 text-center text-sm text-neutral-500 hover:text-white"
              >
                View All Projects →
              </Link>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="mb-4 flex items-center gap-2 font-bold text-white">
                <Activity size={18} className="text-emerald-500" /> Recent Activity
              </h2>
              <div className="relative ml-3 space-y-6 border-l border-neutral-800 pb-2">
                {user.activities.map((act) => (
                  <div key={`${act.action}-${act.target}`} className="relative pl-6">
                    <div className="absolute top-1 -left-[9px] rounded-full border border-neutral-700 bg-neutral-900 p-1 text-neutral-400">
                      {act.icon}
                    </div>
                    <p className="text-sm text-white">
                      {act.action} <span className="text-neutral-400">on</span>{" "}
                      <span className="font-medium text-blue-400">{act.target}</span>
                    </p>
                    <p className="mt-1 text-xs text-neutral-600">{act.time}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center rounded-full bg-neutral-800 p-2.5 text-neutral-400 transition-all hover:bg-white hover:text-black"
      title={label}
    >
      {children}
    </a>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 text-neutral-400">
      <span className="text-neutral-500">{icon}</span>
      <span className="min-w-20 text-neutral-500">{label}</span>
      <span className="text-neutral-200">{value}</span>
    </div>
  );
}

function DiscordIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.08-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 13.83 13.83 0 0 0 1.226-1.994.077.077 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.1.246.198.373.292a.077.077 0 0 1-.006.128 12.299 12.299 0 0 1-1.873.891.077.077 0 0 0-.04.107c.36.698.771 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.211 0 2.176 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.211 0 2.176 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419Z" />
    </svg>
  );
}
