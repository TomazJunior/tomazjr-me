"use client";

import { useTheme } from "@/contexts/ThemeContext";

interface PageContentProps {
  children: React.ReactNode;
  lineCount?: number;
}

export function PageContent({ children, lineCount = 30 }: PageContentProps) {
  const { isGeek } = useTheme();

  if (!isGeek) {
    return <div className="p-6 md:p-8 max-w-4xl mx-auto">{children}</div>;
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="flex">
        <div className="hidden md:block pr-4 border-r border-[var(--border-color)] mr-4 text-[var(--text-secondary)] select-none">
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i} className="text-right text-xs leading-6">
              {i + 1}
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-6">{children}</div>
      </div>
    </div>
  );
}
