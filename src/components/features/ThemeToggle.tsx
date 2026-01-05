"use client";

import { Code, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, toggleTheme, isGeek } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "flex items-center gap-2 w-full px-3 py-2",
        "border-b border-[var(--border-color)]",
        "hover:bg-[var(--bg-hover)] transition-colors",
        "text-xs text-[var(--text-secondary)]"
      )}
      aria-label={`Switch to ${isGeek ? "regular" : "geek"} mode`}
      title={`Currently in ${theme} mode. Click to switch.`}
    >
      {isGeek ? (
        <>
          <Code size={14} className="text-[var(--syntax-keyword)]" />
          <span>geek mode</span>
          <span className="ml-auto text-[var(--text-muted)]">
            {"// click for regular"}
          </span>
        </>
      ) : (
        <>
          <User size={14} className="text-[var(--accent-primary)]" />
          <span>Regular Mode</span>
          <span className="ml-auto text-[var(--text-muted)]">Switch to Geek</span>
        </>
      )}
    </button>
  );
}
