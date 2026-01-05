"use client";

import { ProjectCard } from "@/components/features";
import { projects } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";
import { PageContent } from "@/components/layout";
import { CommentHeader } from "@/components/features";

export default function ProjectsPage() {
  const { isGeek } = useTheme();

  // Regular mode content
  if (!isGeek) {
    return (
      <PageContent>
        <CommentHeader
          title="Personal Projects"
          subtitle="A collection of web applications I've built"
        />

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </PageContent>
    );
  }

  // Geek mode content
  return (
    <PageContent lineCount={25}>
      {/* Comment header */}
      <CommentHeader
        title="Personal Projects"
        subtitle="A collection of web applications I've built"
      />

      {/* Import statement */}
      <div>
        <span className="text-[var(--syntax-keyword)]">import</span>
        <span className="text-[var(--text-primary)]">{" { "}</span>
        <span className="text-[var(--syntax-variable)]">Project</span>
        <span className="text-[var(--text-primary)]">{" } "}</span>
        <span className="text-[var(--syntax-keyword)]">from</span>
        <span className="text-[var(--syntax-string)]">{" '@/types'"}</span>
        <span className="text-[var(--text-primary)]">;</span>
      </div>

      {/* Projects array definition */}
      <div className="space-y-2">
        <p>
          <span className="text-[var(--syntax-keyword)]">export const</span>
          <span className="text-[var(--syntax-variable)]"> projects</span>
          <span className="text-[var(--text-primary)]">: </span>
          <span className="text-[var(--syntax-type)]">Project[]</span>
          <span className="text-[var(--text-primary)]">{" = ["}</span>
        </p>
      </div>

      {/* Project cards */}
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Closing bracket */}
      <p>
        <span className="text-[var(--text-primary)]">{"];"}</span>
      </p>

      {/* Comment */}
      <p className="text-[var(--syntax-comment)]">
        {"// More projects coming soon..."}
      </p>
    </PageContent>
  );
}
