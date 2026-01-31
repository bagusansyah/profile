// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { LayoutDashboard, FolderKanban, FileText } from "lucide-react";

const navItems = [
  { name: "Overview", path: "/", icon: <LayoutDashboard size={18} /> },
  { name: "Portfolio", path: "/portfolio", icon: <FolderKanban size={18} /> },
  { name: "Resume", path: "/resume", icon: <FileText size={18} /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:top-6 md:bottom-auto">
      <div className="flex items-center gap-1 p-2 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-full shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-neutral-100 text-neutral-900 shadow-lg"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              )}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}