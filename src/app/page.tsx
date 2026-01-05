"use client";

import Link from "next/link";
import { ArrowRight, Folder, FileCode, Briefcase, Mail } from "lucide-react";
import { TypingAnimation } from "@/components/features";
import { siteConfig, projects } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";
import { PageContent } from "@/components/layout";

export default function Home() {
  const { isGeek } = useTheme();

  const roles = [
    "Senior Software Engineer at HubSpot",
    "Building web applications",
    "AWS enthusiast",
  ];

  // Regular mode content
  if (!isGeek) {
    return (
      <PageContent>
        {/* Hero section */}
        <div className="py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
            {siteConfig.name}
          </h1>
          <p className="text-xl text-[var(--accent-primary)] font-medium mb-4">
            {siteConfig.title} at {siteConfig.company}
          </p>
          <p className="text-[var(--text-secondary)] max-w-2xl">
            Building digital experiences with modern web technologies. 20+ years
            of experience creating scalable solutions with React, TypeScript,
            Node.js, and AWS.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-4 py-6">
          <Link
            href="/experience"
            className="flex items-center gap-2 px-5 py-3 bg-[var(--accent-primary)] text-white! rounded-lg hover:opacity-90 transition-opacity no-underline"
          >
            <Briefcase size={18} />
            <span>View Experience</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-3 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-primary)] transition-colors no-underline"
          >
            <Mail size={18} className="text-[var(--text-primary)]" />
            <span className="text-[var(--text-primary)]">Get in Touch</span>
          </Link>
        </div>

        {/* Featured personal projects */}
        <div className="py-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
            Personal Projects
          </h2>
          <div className="space-y-4">
            {projects.slice(0, 3).map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-primary)] transition-colors no-underline"
              >
                <h3 className="font-medium text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  {project.description}
                </p>
                <p className="text-xs text-[var(--accent-primary)] mt-2">
                  {project.url.replace("https://", "")}
                </p>
              </a>
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 mt-4 text-[var(--accent-primary)] hover:underline"
          >
            View all personal projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </PageContent>
    );
  }

  // Geek mode content
  return (
    <PageContent lineCount={30}>
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
          <span className="text-[var(--syntax-string)]">{" '@hubspot'"}</span>
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
          <span className="text-[var(--syntax-string)]">{" './portfolio'"}</span>
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
        <p>{"// Building digital experiences with modern web technologies"}</p>
      </div>

      {/* Quick links section */}
      <div className="mt-8 space-y-4">
        <p className="text-[var(--syntax-comment)]">{"// Quick navigation"}</p>

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

      {/* Featured personal projects preview */}
      <div className="mt-8 space-y-4">
        <p className="text-[var(--syntax-comment)]">
          {"// Most recent personal projects"}
        </p>
        <div className="space-y-2">
          <p>
            <span className="text-[var(--syntax-keyword)]">export const</span>
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
    </PageContent>
  );
}
