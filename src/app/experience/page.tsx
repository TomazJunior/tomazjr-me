"use client";

import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";
import { PageContent } from "@/components/layout";
import { CommentHeader } from "@/components/features";

export default function ExperiencePage() {
  const { isGeek } = useTheme();

  // Regular mode content
  if (!isGeek) {
    return (
      <PageContent>
        <CommentHeader
          title="Work Experience"
          subtitle="20+ years building software solutions"
        />

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="border border-[var(--border-color)] rounded-lg bg-[var(--bg-secondary)] p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[var(--accent-primary)] mt-1">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                    <Calendar size={14} />
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-muted)] mt-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              {exp.description && (
                <p className="text-[var(--text-secondary)] mt-3">
                  {exp.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </PageContent>
    );
  }

  // Geek mode content
  return (
    <PageContent lineCount={50}>
      {/* Comment header */}
      <CommentHeader
        title="Work Experience"
        subtitle="20+ years building software solutions"
      />

      {/* Import statement */}
      <div>
        <span className="text-[var(--syntax-keyword)]">import</span>
        <span className="text-[var(--text-primary)]">{" { "}</span>
        <span className="text-[var(--syntax-variable)]">Experience</span>
        <span className="text-[var(--text-primary)]">{" } "}</span>
        <span className="text-[var(--syntax-keyword)]">from</span>
        <span className="text-[var(--syntax-string)]">{" '@/career'"}</span>
        <span className="text-[var(--text-primary)]">;</span>
      </div>

      {/* Experience array */}
      <div className="space-y-2">
        <p>
          <span className="text-[var(--syntax-keyword)]">export const</span>
          <span className="text-[var(--syntax-variable)]"> workHistory</span>
          <span className="text-[var(--text-primary)]">: </span>
          <span className="text-[var(--syntax-type)]">Experience[]</span>
          <span className="text-[var(--text-primary)]">{" = ["}</span>
        </p>
      </div>

      {/* Experience cards */}
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="border border-[var(--border-color)] rounded bg-[var(--bg-secondary)] p-4 hover:border-[var(--accent-primary)] transition-colors"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-[var(--syntax-function)] font-medium">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[var(--syntax-type)]">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                    <Calendar size={12} />
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-muted)]">
                    <MapPin size={12} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              {exp.description && (
                <p className="text-[var(--text-secondary)] text-sm mt-2">
                  <span className="text-[var(--syntax-comment)]">// </span>
                  {exp.description}
                </p>
              )}
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
