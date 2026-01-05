"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface CommentHeaderProps {
  title: string;
  subtitle?: string;
}

export function CommentHeader({ title, subtitle }: CommentHeaderProps) {
  const { isGeek } = useTheme();

  if (!isGeek) {
    return (
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-[var(--text-secondary)]">{subtitle}</p>
        )}
      </header>
    );
  }

  return (
    <div className="text-[var(--syntax-comment)]">
      <p>{"/**"}</p>
      <p>{` * ${title}`}</p>
      {subtitle && <p>{` * ${subtitle}`}</p>}
      <p>{" */"}</p>
    </div>
  );
}
