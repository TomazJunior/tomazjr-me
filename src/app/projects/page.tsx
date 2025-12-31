import { Metadata } from "next";
import { ProjectCard } from "@/components/features";
import { projects } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects | Tomaz Junior",
  description: "Explore my portfolio of web development projects built with React, Next.js, and TypeScript.",
};

export default function ProjectsPage() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      {/* Line numbers container */}
      <div className="flex">
        <div className="hidden md:block pr-4 border-r border-[var(--border-color)] mr-4 text-[var(--text-secondary)] select-none">
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className="text-right text-xs leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-6">
          {/* Comment header */}
          <div className="text-[var(--syntax-comment)]">
            <p>{"/**"}</p>
            <p>{" * Projects Directory"}</p>
            <p>{" * A collection of web applications I've built"}</p>
            <p>{" */"}</p>
          </div>

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
        </div>
      </div>
    </div>
  );
}
