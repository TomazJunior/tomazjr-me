"use client";

import Link from "next/link";
import { ArrowRight, Folder, FileCode } from "lucide-react";
import { TypingAnimation } from "@/components/features";
import { siteConfig, projects } from "@/lib/constants";

export default function Home() {
  const roles = [
    "Software Engineer at HubSpot",
    "Building web applications",
    "AWS enthusiast",
  ];

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      {/* Line numbers container */}
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
            <p>{" * Personal Portfolio"}</p>
            <p>{" * @author Tomaz Junior"}</p>
            <p>{" */"}</p>
          </div>

          {/* Import statements */}
          <div className="space-y-1">
            <p>
              <span className="text-[var(--syntax-keyword)]">import</span>
              <span className="text-[var(--text-primary)]">{" { "}</span>
              <span className="text-[var(--syntax-variable)]">developer</span>
              <span className="text-[var(--text-primary)]">{" } "}</span>
              <span className="text-[var(--syntax-keyword)]">from</span>
              <span className="text-[var(--syntax-string)]">
                {" '@hubspot'"}
              </span>
              <span className="text-[var(--text-primary)]">;</span>
            </p>
            <p>
              <span className="text-[var(--syntax-keyword)]">import</span>
              <span className="text-[var(--text-primary)]">{" { "}</span>
              <span className="text-[var(--syntax-variable)]">projects</span>
              <span className="text-[var(--text-primary)]">{", "}</span>
              <span className="text-[var(--syntax-variable)]">skills</span>
              <span className="text-[var(--text-primary)]">{" } "}</span>
              <span className="text-[var(--syntax-keyword)]">from</span>
              <span className="text-[var(--syntax-string)]">
                {" './portfolio'"}
              </span>
              <span className="text-[var(--text-primary)]">;</span>
            </p>
          </div>

          {/* Main content */}
          <div className="space-y-2">
            <p>
              <span className="text-[var(--syntax-keyword)]">const</span>
              <span className="text-[var(--syntax-variable)]">
                {" "}
                {siteConfig.name.replace(" ", "")}
              </span>
              <span className="text-[var(--text-primary)]">{" = {"}</span>
            </p>

            <div className="pl-4 space-y-1">
              <p>
                <span className="text-[var(--syntax-variable)]">name</span>
                <span className="text-[var(--text-primary)]">: </span>
                <span className="text-[var(--syntax-string)]">
                  {`"${siteConfig.name}"`}
                </span>
                <span className="text-[var(--text-primary)]">,</span>
              </p>
              <p>
                <span className="text-[var(--syntax-variable)]">role</span>
                <span className="text-[var(--text-primary)]">: </span>
                <span className="text-[var(--syntax-string)]">{'"'}</span>
                <span className="text-[var(--syntax-string)]">
                  <TypingAnimation texts={roles} />
                </span>
                <span className="text-[var(--syntax-string)]">{'"'}</span>
                <span className="text-[var(--text-primary)]">,</span>
              </p>
              <p>
                <span className="text-[var(--syntax-variable)]">company</span>
                <span className="text-[var(--text-primary)]">: </span>
                <span className="text-[var(--syntax-string)]">
                  {`"${siteConfig.company}"`}
                </span>
                <span className="text-[var(--text-primary)]">,</span>
              </p>
            </div>

            <p>
              <span className="text-[var(--text-primary)]">{"}"}</span>
              <span className="text-[var(--text-primary)]">;</span>
            </p>
          </div>

          {/* Description comment */}
          <div className="text-[var(--syntax-comment)] mt-8">
            <p>
              {"// Building digital experiences with modern web technologies"}
            </p>
          </div>

          {/* Quick links section */}
          <div className="mt-8 space-y-4">
            <p className="text-[var(--syntax-comment)]">
              {"// Quick navigation"}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded hover:bg-[var(--bg-hover)] hover:border-[var(--accent-primary)] transition-colors no-underline group"
              >
                <Folder size={16} className="text-[var(--syntax-function)]" />
                <span className="text-[var(--text-primary)]">projects/</span>
                <ArrowRight
                  size={14}
                  className="text-[var(--text-secondary)] group-hover:text-[var(--accent-success)] transition-colors"
                />
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded hover:bg-[var(--bg-hover)] hover:border-[var(--accent-primary)] transition-colors no-underline group"
              >
                <FileCode size={16} className="text-[var(--syntax-keyword)]" />
                <span className="text-[var(--text-primary)]">contact.tsx</span>
                <ArrowRight
                  size={14}
                  className="text-[var(--text-secondary)] group-hover:text-[var(--accent-success)] transition-colors"
                />
              </Link>
            </div>
          </div>

          {/* Featured projects preview */}
          <div className="mt-8 space-y-4">
            <p className="text-[var(--syntax-comment)]">
              {"// Most recent featured projects"}
            </p>
            <div className="space-y-2">
              <p>
                <span className="text-[var(--syntax-keyword)]">
                  export const
                </span>
                <span className="text-[var(--syntax-variable)]"> featured</span>
                <span className="text-[var(--text-primary)]">{" = ["}</span>
              </p>
              <div className="pl-4 space-y-1">
                {projects.slice(0, 3).map((project, index) => (
                  <p key={project.id}>
                    <span className="text-[var(--syntax-string)]">
                      {`"${project.title}"`}
                    </span>
                    <span className="text-[var(--text-primary)]">
                      {index < 2 ? "," : ""}
                    </span>
                    <span className="text-[var(--syntax-comment)]">
                      {` // ${project.url.replace("https://", "")}`}
                    </span>
                  </p>
                ))}
              </div>
              <p>
                <span className="text-[var(--text-primary)]">{"];"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
