import { Metadata } from "next";
import { ContactForm } from "@/components/features";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact | Tomaz Junior",
  description: "Get in touch with me. Send a message and I'll get back to you soon.",
};

export default function ContactPage() {
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
            <p>{" * Contact Form"}</p>
            <p>{" * Let's connect and build something together"}</p>
            <p>{" */"}</p>
          </div>

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
        </div>
      </div>
    </div>
  );
}
