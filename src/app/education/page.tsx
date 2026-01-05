"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";
import { PageContent } from "@/components/layout";
import { CommentHeader } from "@/components/features";

export default function EducationPage() {
  const { isGeek } = useTheme();

  // Regular mode content
  if (!isGeek) {
    return (
      <PageContent>
        <CommentHeader
          title="Education"
          subtitle="Academic background and certifications"
        />

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="border border-[var(--border-color)] rounded-lg bg-[var(--bg-secondary)] p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {edu.degree}
                  </h3>
                  <p className="text-[var(--accent-primary)] font-medium">
                    {edu.field}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)] mt-2">
                    <GraduationCap size={16} />
                    <span>{edu.school}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[var(--text-muted)] text-sm">
                  <Calendar size={14} />
                  <span>
                    {edu.startYear} - {edu.endYear}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContent>
    );
  }

  // Geek mode content
  return (
    <PageContent lineCount={30}>
      {/* Comment header */}
      <CommentHeader
        title="Education"
        subtitle="Academic background and certifications"
      />

      {/* Import statement */}
      <div>
        <span className="text-[var(--syntax-keyword)]">import</span>
        <span className="text-[var(--text-primary)]">{" { "}</span>
        <span className="text-[var(--syntax-variable)]">Degree</span>
        <span className="text-[var(--text-primary)]">{" } "}</span>
        <span className="text-[var(--syntax-keyword)]">from</span>
        <span className="text-[var(--syntax-string)]">{" '@/academics'"}</span>
        <span className="text-[var(--text-primary)]">;</span>
      </div>

      {/* Education array */}
      <div className="space-y-2">
        <p>
          <span className="text-[var(--syntax-keyword)]">export const</span>
          <span className="text-[var(--syntax-variable)]"> degrees</span>
          <span className="text-[var(--text-primary)]">: </span>
          <span className="text-[var(--syntax-type)]">Degree[]</span>
          <span className="text-[var(--text-primary)]">{" = ["}</span>
        </p>
      </div>

      {/* Education cards */}
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="border border-[var(--border-color)] rounded bg-[var(--bg-secondary)] p-4 hover:border-[var(--accent-primary)] transition-colors"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-[var(--syntax-function)] font-medium">
                    {edu.degree}
                  </h3>
                  <p className="text-[var(--syntax-string)]">{edu.field}</p>
                  <div className="flex items-center gap-2 text-[var(--syntax-type)] mt-1">
                    <GraduationCap size={14} />
                    <span>{edu.school}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[var(--text-secondary)] text-sm">
                  <Calendar size={12} />
                  <span>
                    {edu.startYear} - {edu.endYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing bracket */}
      <p>
        <span className="text-[var(--text-primary)]">{"];"}</span>
      </p>
    </PageContent>
  );
}
