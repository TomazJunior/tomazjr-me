import { Metadata } from "next";
import { skillCategories, certifications } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Skills | Tomaz Junior",
  description:
    "Technical skills and technologies: React, TypeScript, Node.js, AWS, and more.",
};

export default function SkillsPage() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex">
        <div className="hidden md:block pr-4 border-r border-[var(--border-color)] mr-4 text-[var(--text-secondary)] select-none">
          {Array.from({ length: 40 }, (_, i) => (
            <div key={i} className="text-right text-xs leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-6">
          {/* Comment header */}
          <div className="text-[var(--syntax-comment)]">
            <p>{"/**"}</p>
            <p>{" * Technical Skills"}</p>
            <p>{" * Technologies and tools I work with"}</p>
            <p>{" */"}</p>
          </div>

          {/* Import statement */}
          <div>
            <span className="text-[var(--syntax-keyword)]">import</span>
            <span className="text-[var(--text-primary)]">{" { "}</span>
            <span className="text-[var(--syntax-variable)]">Skill</span>
            <span className="text-[var(--text-primary)]">{" } "}</span>
            <span className="text-[var(--syntax-keyword)]">from</span>
            <span className="text-[var(--syntax-string)]">
              {" '@/expertise'"}
            </span>
            <span className="text-[var(--text-primary)]">;</span>
          </div>

          {/* Skills object */}
          <div className="space-y-2">
            <p>
              <span className="text-[var(--syntax-keyword)]">export const</span>
              <span className="text-[var(--syntax-variable)]"> skills</span>
              <span className="text-[var(--text-primary)]">{" = {"}</span>
            </p>
          </div>

          {/* Skill categories */}
          <div className="space-y-4 pl-4">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name}>
                <p>
                  <span className="text-[var(--syntax-variable)]">
                    {category.name.toLowerCase().replace(/ & /g, "_")}
                  </span>
                  <span className="text-[var(--text-primary)]">: [</span>
                </p>
                <div className="pl-4 flex flex-wrap gap-2 py-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded text-[var(--syntax-string)] text-sm hover:border-[var(--accent-primary)] transition-colors"
                    >
                      &quot;{skill}&quot;
                      {skillIndex < category.skills.length - 1 ? "," : ""}
                    </span>
                  ))}
                </div>
                <p>
                  <span className="text-[var(--text-primary)]">]</span>
                  <span className="text-[var(--text-primary)]">
                    {categoryIndex < skillCategories.length - 1 ? "," : ""}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Closing bracket */}
          <p>
            <span className="text-[var(--text-primary)]">{"};"}</span>
          </p>

          {/* Certifications section */}
          <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
            <div className="text-[var(--syntax-comment)] mb-4">
              <p>{"/**"}</p>
              <p>{" * Certifications"}</p>
              <p>{" */"}</p>
            </div>

            <div className="space-y-2">
              <p>
                <span className="text-[var(--syntax-keyword)]">export const</span>
                <span className="text-[var(--syntax-variable)]"> certifications</span>
                <span className="text-[var(--text-primary)]">{" = ["}</span>
              </p>
            </div>

            <div className="pl-4 space-y-3 py-2">
              {certifications.map((cert, index) => (
                <div key={cert.id} className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded hover:border-[var(--accent-primary)] transition-colors">
                  <p>
                    <span className="text-[var(--text-primary)]">{"{ "}</span>
                  </p>
                  <div className="pl-4">
                    <p>
                      <span className="text-[var(--syntax-variable)]">name</span>
                      <span className="text-[var(--text-primary)]">: </span>
                      <span className="text-[var(--syntax-string)]">&quot;{cert.name}&quot;</span>
                      <span className="text-[var(--text-primary)]">,</span>
                    </p>
                    <p>
                      <span className="text-[var(--syntax-variable)]">issuer</span>
                      <span className="text-[var(--text-primary)]">: </span>
                      <span className="text-[var(--syntax-string)]">&quot;{cert.issuer}&quot;</span>
                      <span className="text-[var(--text-primary)]">,</span>
                    </p>
                    <p>
                      <span className="text-[var(--syntax-variable)]">issued</span>
                      <span className="text-[var(--text-primary)]">: </span>
                      <span className="text-[var(--syntax-string)]">&quot;{cert.issueDate}&quot;</span>
                      <span className="text-[var(--text-primary)]">,</span>
                    </p>
                  </div>
                  <p>
                    <span className="text-[var(--text-primary)]">{"}"}</span>
                    <span className="text-[var(--text-primary)]">
                      {index < certifications.length - 1 ? "," : ""}
                    </span>
                  </p>
                </div>
              ))}
            </div>

            <p>
              <span className="text-[var(--text-primary)]">{"];"}</span>
            </p>
          </div>

          {/* Comment */}
          <p className="text-[var(--syntax-comment)] mt-6">
            {"// Always learning new technologies..."}
          </p>
        </div>
      </div>
    </div>
  );
}
