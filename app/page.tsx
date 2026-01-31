"use client";

import Image from "next/image";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, MapPin, Calendar, 
  ExternalLink, Code2, Terminal, Activity, 
  Eye, GitFork, Star, Hash, MessageSquare 
} from "lucide-react";
import Link from "next/link";

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { 
    ssr: false,
    loading: () => <div className="h-36 w-full bg-neutral-800/20 animate-pulse rounded-lg flex items-center justify-center text-xs text-neutral-600">Loading Contributions...</div>
  }
);

export default function Home() {
  const user = {
    name: "Bagus Nadiansah",
    username: "bagusansyah", 
    role: "AI & Full-Stack Engineer",
    bio: "Software Engineer yang fokus pada integrasi AI dan Web Development. Berpengalaman membangun sistem skalabel dengan React, Node.js, dan Python.",
    location: "Malang, Indonesia",
    joined: "March 2023",
    email: "bagusnadiansah@gmail.com",
    discord: "bagus#1234", 
    
    stats: [
      { label: "Total Views", value: "24.5K", icon: <Eye size={16} className="text-blue-400" /> },
      { label: "Followers", value: "1,234", icon: <Hash size={16} className="text-purple-400" /> },
      { label: "Projects", value: "12", icon: <Code2 size={16} className="text-emerald-400" /> },
      { label: "Exp (Yrs)", value: "3+", icon: <Calendar size={16} className="text-orange-400" /> },
    ],

    skills: [
      "React", "Next.js", "TypeScript", "Node.js", 
      "Python", "TensorFlow", "Tailwind CSS", "Docker", 
      "Figma", "PostgreSQL", "Flutter"
    ],

    featuredProjects: [
      {
        title: "AI Image Classifier",
        desc: "Sistem deteksi objek otomatis menggunakan YOLOv8 dan Python.",
        tags: ["Python", "AI", "OpenCV"],
        color: "bg-blue-500",
        link: "#"
      },
      {
        title: "GIS Mapping System",
        desc: "Visualisasi data geografis interaktif untuk pemetaan wilayah.",
        tags: ["React", "Leaflet", "GIS"],
        color: "bg-emerald-500",
        link: "#"
      }
    ],

    activities: [
      { action: "Deployed new version", target: "GIS System", time: "2 hours ago", icon: <Terminal size={14} /> },
      { action: "Starred repository", target: "nextjs-ai-starter", time: "5 hours ago", icon: <Star size={14} /> },
      { action: "Fixed bug", target: "Image Classification Model", time: "Yesterday", icon: <GitFork size={14} /> },
      { action: "Published article", target: "Medium: AI in 2026", time: "2 days ago", icon: <Activity size={14} /> },
    ]
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <motion.aside 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-4 space-y-6"
        >
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 shadow-xl">
            <div className="flex flex-col items-center text-center">
              
              {/* --- BAGIAN FOTO PROFIL LOKAL --- */}
              {/* Pastikan file 'foto-profil.jpg' ada di folder 'public' */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-700 bg-neutral-800 shadow-2xl mb-4">
                <Image 
                  src="/fotoprofil.jpg" 
                  alt={user.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-emerald-400 font-medium mb-4">{user.role}</p>
              
              <div className="flex justify-center gap-3 mb-6">
                <SocialLink href="https://github.com" icon={<Github size={18} />} />
                <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
                
                <SocialLink 
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`} 
                  icon={<Mail size={18} />} 
                />
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(user.discord);
                    alert(`Discord ID copied: ${user.discord}`);
                  }}
                  className="p-2.5 bg-neutral-800 rounded-full text-neutral-400 hover:bg-[#5865F2] hover:text-white transition-all cursor-pointer flex items-center justify-center" 
                  title="Copy Discord ID"
                >
                   <DiscordIcon size={18} />
                </button>
              </div>

              <div className="w-full border-t border-neutral-800 pt-6 text-left space-y-3 text-sm">
                <InfoRow icon={<MapPin size={16}/>} label="Location" value={user.location} />
                <InfoRow icon={<Calendar size={16}/>} label="Joined" value={user.joined} />
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6">
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <Terminal size={18} className="text-purple-500"/> Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-neutral-950 border border-neutral-800 rounded-md text-xs text-neutral-400 hover:border-neutral-600 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.aside>

        <div className="lg:col-span-8 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold text-white mb-3">About Me</h2>
            <p className="text-neutral-400 leading-relaxed">
              {user.bio}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {user.stats.map((stat, i) => (
              <div key={i} className="bg-neutral-900/50 border border-neutral-800 p-4 rounded-xl flex flex-col justify-between hover:bg-neutral-800/50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-neutral-500 text-xs font-medium uppercase">{stat.label}</span>
                  {stat.icon}
                </div>
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 overflow-hidden"
          >
             <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                <Github size={18} className="text-white"/> Contributions
             </h3>
             <div className="flex justify-center w-full overflow-x-auto custom-scrollbar pb-2">
                <GitHubCalendar 
                  username={user.username} 
                  colorScheme="dark"
                  blockSize={13} 
                  blockMargin={4} 
                  fontSize={14}
                  style={{ color: '#a3a3a3' }}
                  theme={{
                    dark: [ '#161b22', '#0e4429', '#006d32', '#26a641', '#39d353' ],
                  }}
                />
             </div>
             <div className="flex justify-between items-center mt-4 border-t border-neutral-800 pt-3">
               <p className="text-xs text-neutral-500">Total contributions in the last year</p>
               <a href={`https://github.com/${user.username}`} target="_blank" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
                 View GitHub Profile →
               </a>
             </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="font-bold text-white flex items-center gap-2">
                <Star size={18} className="text-yellow-500" /> Featured Projects
              </h3>
              {user.featuredProjects.map((project, i) => (
                <div key={i} className="group p-4 bg-neutral-900/30 border border-neutral-800 hover:border-neutral-600 rounded-xl transition-all cursor-pointer">
                   <div className="flex items-center gap-3 mb-2">
                      <div className={`w-2 h-2 rounded-full ${project.color}`} />
                      <h4 className="font-semibold text-neutral-200 group-hover:text-blue-400 transition-colors">{project.title}</h4>
                      <ExternalLink size={14} className="ml-auto text-neutral-600 group-hover:text-white" />
                   </div>
                   <p className="text-sm text-neutral-500 mb-3 line-clamp-2">{project.desc}</p>
                   <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-1.5 py-0.5 bg-neutral-800 rounded text-neutral-400">{tag}</span>
                      ))}
                   </div>
                </div>
              ))}
              <Link href="/portfolio" className="block text-center text-sm text-neutral-500 hover:text-white py-2">
                View All Projects →
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="font-bold text-white flex items-center gap-2 mb-4">
                <Activity size={18} className="text-emerald-500" /> Recent Activity
              </h3>
              <div className="relative border-l border-neutral-800 ml-3 space-y-6 pb-2">
                {user.activities.map((act, i) => (
                  <div key={i} className="relative pl-6">
                    <div className="absolute -left-[9px] top-1 bg-neutral-900 border border-neutral-700 text-neutral-400 rounded-full p-1">
                      {act.icon}
                    </div>
                    <p className="text-sm text-white">
                      {act.action} <span className="text-neutral-400">on</span> <span className="font-medium text-blue-400">{act.target}</span>
                    </p>
                    <p className="text-xs text-neutral-600 mt-1">{act.time}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-neutral-800 rounded-full text-neutral-400 hover:bg-white hover:text-black transition-all">
      {icon}
    </a>
  );
}

function InfoRow({ icon, label, value, isLink }: { icon: any, label: string, value: string, isLink?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1 group">
      <div className="flex items-center gap-2 text-neutral-500">
        {icon}
        <span>{label}</span>
      </div>
      {isLink ? (
        <a href={`mailto:${value}`} className="text-neutral-300 hover:text-white transition-colors truncate max-w-[150px]">{value}</a>
      ) : (
        <span className="text-neutral-300 truncate max-w-[150px]">{value}</span>
      )}
    </div>
  );
}

function DiscordIcon({ size = 20, className = "" }: { size?: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 127.14 96.36" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c.63-23.28-1.24-47.53-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
    </svg>
  );
}