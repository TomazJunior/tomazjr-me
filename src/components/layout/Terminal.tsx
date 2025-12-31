"use client";

import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col",
        "bg-[var(--bg-primary)]",
        className
      )}
    >
      {/* Window Title Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-tertiary)] border-b border-[var(--border-color)]">
        {/* Traffic Light Buttons */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--window-close)]" />
          <div className="w-3 h-3 rounded-full bg-[var(--window-minimize)]" />
          <div className="w-3 h-3 rounded-full bg-[var(--window-maximize)]" />
        </div>
        <span className="ml-4 text-xs text-[var(--text-secondary)]">
          tomazjr — portfolio
        </span>
      </div>
      {children}
    </div>
  );
}
