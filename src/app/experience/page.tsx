import { Metadata } from "next";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Experience | Tomaz Junior",
  description:
    "20+ years of software development experience across multiple companies and technologies.",
};

export default function ExperiencePage() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex">
        <div className="hidden md:block pr-4 border-r border-[var(--border-color)] mr-4 text-[var(--text-secondary)] select-none">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="text-right text-xs leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-6">
          {/* Comment header */}
          <div className="text-[var(--syntax-comment)]">
            <p>{"/**"}</p>
            <p>{" * Work Experience"}</p>
            <p>{" * 20+ years building software solutions"}</p>
            <p>{" */"}</p>
          </div>

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
        </div>
      </div>
    </div>
  );
}
