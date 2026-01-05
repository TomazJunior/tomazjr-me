"use client";

import { Github, Linkedin, GitBranch } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";

export function StatusBar() {
  const { isGeek } = useTheme();

  // Regular mode: Simple footer
  if (!isGeek) {
    return (
      <div className="flex items-center justify-center gap-6 px-4 py-3 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] text-sm">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors no-underline"
        >
          <Github size={16} />
          <span>GitHub</span>
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors no-underline"
        >
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
      </div>
    );
  }

  // Geek mode: IDE-style status bar
  return (
    <div className="flex items-center justify-between px-4 py-1 bg-[var(--accent-primary)] text-white text-xs">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <GitBranch size={12} />
          <span>main</span>
        </div>
        <span>TypeScript</span>
        <span>UTF-8</span>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[var(--syntax-function)] transition-colors no-underline text-white"
        >
          <Github size={12} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
        <a
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-[var(--syntax-function)] transition-colors no-underline text-white"
        >
          <Linkedin size={12} />
          <span className="hidden sm:inline">LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
