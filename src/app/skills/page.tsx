"use client";

import { skillCategories, certifications } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";
import { PageContent } from "@/components/layout";
import { CommentHeader } from "@/components/features";
import { Award } from "lucide-react";

export default function SkillsPage() {
  const { isGeek } = useTheme();

  // Regular mode content
  if (!isGeek) {
    return (
      <PageContent>
        <CommentHeader
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                {category.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-primary)] text-sm hover:border-[var(--accent-primary)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications section */}
        <div className="mt-10 pt-8 border-t border-[var(--border-color)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            Certifications
          </h2>

          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <Award
                    size={20}
                    className="text-[var(--accent-primary)] mt-0.5"
                  />
                  <div>
                    <h3 className="font-medium text-[var(--text-primary)]">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {cert.issuer} - {cert.issueDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContent>
    );
  }

  // Geek mode content
  return (
    <PageContent lineCount={40}>
      {/* Comment header */}
      <CommentHeader
        title="Technical Skills"
        subtitle="Technologies and tools I work with"
      />

      {/* Import statement */}
      <div>
        <span className="text-[var(--syntax-keyword)]">import</span>
        <span className="text-[var(--text-primary)]">{" { "}</span>
        <span className="text-[var(--syntax-variable)]">Skill</span>
        <span className="text-[var(--text-primary)]">{" } "}</span>
        <span className="text-[var(--syntax-keyword)]">from</span>
        <span className="text-[var(--syntax-string)]">{" '@/expertise'"}</span>
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
            <span className="text-[var(--syntax-variable)]">
              {" "}
              certifications
            </span>
            <span className="text-[var(--text-primary)]">{" = ["}</span>
          </p>
        </div>

        <div className="pl-4 space-y-3 py-2">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded hover:border-[var(--accent-primary)] transition-colors"
            >
              <p>
                <span className="text-[var(--text-primary)]">{"{ "}</span>
              </p>
              <div className="pl-4">
                <p>
                  <span className="text-[var(--syntax-variable)]">name</span>
                  <span className="text-[var(--text-primary)]">: </span>
                  <span className="text-[var(--syntax-string)]">
                    &quot;{cert.name}&quot;
                  </span>
                  <span className="text-[var(--text-primary)]">,</span>
                </p>
                <p>
                  <span className="text-[var(--syntax-variable)]">issuer</span>
                  <span className="text-[var(--text-primary)]">: </span>
                  <span className="text-[var(--syntax-string)]">
                    &quot;{cert.issuer}&quot;
                  </span>
                  <span className="text-[var(--text-primary)]">,</span>
                </p>
                <p>
                  <span className="text-[var(--syntax-variable)]">issued</span>
                  <span className="text-[var(--text-primary)]">: </span>
                  <span className="text-[var(--syntax-string)]">
                    &quot;{cert.issueDate}&quot;
                  </span>
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
    </PageContent>
  );
}
