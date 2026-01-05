"use client";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { useSidebar } from "@/contexts/SidebarContext";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  const { isGeek } = useTheme();
  const { setMobileOpen } = useSidebar();

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col",
        "bg-[var(--bg-primary)]",
        className
      )}
    >
      {/* Window Title Bar - geek mode only */}
      {isGeek && (
        <div className="flex items-center gap-2 px-4 py-2 bg-[var(--bg-tertiary)] border-b border-[var(--border-color)]">
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-1 mr-1 hover:bg-[var(--bg-hover)] rounded transition-colors"
            aria-label="Open navigation"
          >
            <Menu size={18} className="text-[var(--text-primary)]" />
          </button>
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
      )}
      {children}
    </div>
  );
}
