import { Metadata } from "next";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Education | Tomaz Junior",
  description:
    "Academic background including Master's in Software Design with AI from TUS.",
};

export default function EducationPage() {
  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex">
        <div className="hidden md:block pr-4 border-r border-[var(--border-color)] mr-4 text-[var(--text-secondary)] select-none">
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="text-right text-xs leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <div className="flex-1 space-y-6">
          {/* Comment header */}
          <div className="text-[var(--syntax-comment)]">
            <p>{"/**"}</p>
            <p>{" * Education"}</p>
            <p>{" * Academic background and certifications"}</p>
            <p>{" */"}</p>
          </div>

          {/* Import statement */}
          <div>
            <span className="text-[var(--syntax-keyword)]">import</span>
            <span className="text-[var(--text-primary)]">{" { "}</span>
            <span className="text-[var(--syntax-variable)]">Degree</span>
            <span className="text-[var(--text-primary)]">{" } "}</span>
            <span className="text-[var(--syntax-keyword)]">from</span>
            <span className="text-[var(--syntax-string)]">
              {" '@/academics'"}
            </span>
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
        </div>
      </div>
    </div>
  );
}
