"use client";

import { ContactForm } from "@/components/features";
import { siteConfig } from "@/lib/constants";
import { useTheme } from "@/contexts/ThemeContext";
import { PageContent } from "@/components/layout";
import { CommentHeader } from "@/components/features";
import { Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const { isGeek } = useTheme();

  // Regular mode content
  if (!isGeek) {
    return (
      <PageContent>
        <CommentHeader
          title="Contact"
          subtitle="Let's connect and build something together"
        />

        {/* Contact links */}
        <div className="flex gap-4 mb-8">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-primary)] transition-colors no-underline"
          >
            <Github size={18} className="text-[var(--text-primary)]" />
            <span className="text-[var(--text-primary)]">GitHub</span>
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg hover:border-[var(--accent-primary)] transition-colors no-underline"
          >
            <Linkedin size={18} className="text-[var(--accent-primary)]" />
            <span className="text-[var(--text-primary)]">LinkedIn</span>
          </a>
        </div>

        {/* Contact form */}
        <div className="max-w-lg">
          <ContactForm />
        </div>
      </PageContent>
    );
  }

  // Geek mode content
  return (
    <PageContent lineCount={30}>
      {/* Comment header */}
      <CommentHeader
        title="Contact Form"
        subtitle="Let's connect and build something together"
      />

      {/* Contact info comment */}
      <div className="text-[var(--syntax-comment)] space-y-1">
        <p>{"// Alternative ways to reach me:"}</p>
        <p>
          {"// GitHub: "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--syntax-variable)] hover:text-[var(--accent-success)]"
          >
            {siteConfig.links.github.replace("https://", "")}
          </a>
        </p>
        <p>
          {"// LinkedIn: "}
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--syntax-variable)] hover:text-[var(--accent-success)]"
          >
            {siteConfig.links.linkedin.replace("https://www.", "")}
          </a>
        </p>
      </div>

      {/* Contact form */}
      <div className="max-w-lg">
        <ContactForm />
      </div>
    </PageContent>
  );
}
