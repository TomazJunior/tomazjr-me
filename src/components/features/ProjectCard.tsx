"use client";

import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { isGeek } = useTheme();

  // Regular mode: Clean card layout
  if (!isGeek) {
    return (
      <div className="border border-[var(--border-color)] rounded-lg bg-[var(--bg-secondary)] p-5 hover:shadow-md hover:border-[var(--accent-primary)] transition-all">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] mt-2">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--accent-primary)] hover:underline no-underline"
        >
          <ExternalLink size={14} />
          <span>{project.url.replace("https://", "")}</span>
        </a>
      </div>
    );
  }

  // Geek mode: Code-style card
  return (
    <div className="border border-[var(--border-color)] rounded bg-[var(--bg-secondary)] overflow-hidden hover:border-[var(--accent-primary)] transition-colors">
      {/* File tab header */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-tertiary)] border-b border-[var(--border-color)]">
        <span className="text-xs text-[var(--text-secondary)]">
          project_{index + 1}.ts
        </span>
      </div>

      <div className="p-4 space-y-4">
        {/* Code-style content */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-[var(--syntax-keyword)]">const</span>
            <span className="text-[var(--syntax-variable)]">project</span>
            <span className="text-[var(--text-primary)]">=</span>
            <span className="text-[var(--text-primary)]">{"{"}</span>
          </div>

          <div className="pl-4 space-y-1">
            <p>
              <span className="text-[var(--syntax-variable)]">name</span>
              <span className="text-[var(--text-primary)]">: </span>
              <span className="text-[var(--syntax-string)]">
                {`"${project.title}"`}
              </span>
              <span className="text-[var(--text-primary)]">,</span>
            </p>
            <div>
              <span className="text-[var(--syntax-variable)]">desc</span>
              <span className="text-[var(--text-primary)]">: </span>
              <span className="text-[var(--syntax-string)] break-words">
                {`"${project.description}"`}
              </span>
              <span className="text-[var(--text-primary)]">,</span>
            </div>
          </div>

          <p>
            <span className="text-[var(--text-primary)]">{"};"}</span>
          </p>
        </div>

        {/* Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[var(--syntax-variable)] hover:text-[var(--accent-success)] transition-colors no-underline"
        >
          <ExternalLink size={14} />
          <span>{project.url.replace("https://", "")}</span>
        </a>
      </div>
    </div>
  );
}
