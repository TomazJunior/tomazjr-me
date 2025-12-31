"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FileCode,
  ChevronDown,
  ChevronRight,
  Files,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/constants";
import { useTabs } from "@/contexts/TabsContext";

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const { openTab, isTabOpen } = useTabs();

  const handleItemClick = (path: string) => {
    openTab(path);
    setIsMobileOpen(false);
  };

  const SidebarContent = () => (
    <>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-2 text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">
          <Files size={14} />
          <span>Explorer</span>
        </div>
        {/* Mobile close button */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden p-1 hover:bg-[var(--bg-hover)] rounded transition-colors"
          aria-label="Close sidebar"
        >
          <X size={16} className="text-[var(--text-secondary)]" />
        </button>
      </div>

      {/* Project Section */}
      <div className="py-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 w-full px-2 py-1 text-[11px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors uppercase tracking-wide font-semibold"
        >
          {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          <span>tomazjr-me</span>
        </button>

        {/* Navigation Items */}
        {isExpanded && (
          <div className="pl-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const isOpen = isTabOpen(item.path);
              return (
                <button
                  key={item.path}
                  onClick={() => handleItemClick(item.path)}
                  className={cn(
                    "flex items-center gap-2 w-full px-2 py-1 text-[13px]",
                    "hover:bg-[var(--bg-hover)] transition-colors text-left",
                    isActive
                      ? "bg-[var(--bg-active)] text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)]"
                  )}
                >
                  <FileCode
                    size={14}
                    className={cn(
                      isOpen
                        ? "text-[var(--syntax-keyword)]"
                        : "text-[var(--text-muted)]"
                    )}
                  />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-2 left-2 z-50 p-2 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded hover:bg-[var(--bg-hover)] transition-colors"
        aria-label="Open navigation"
      >
        <Menu size={20} className="text-[var(--text-primary)]" />
      </button>

      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar (slide-in) */}
      <div
        className={cn(
          "md:hidden fixed top-0 left-0 h-full w-56 bg-[var(--bg-secondary)] border-r border-[var(--border-color)] z-50",
          "transform transition-transform duration-200 ease-in-out",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarContent />
      </div>

      {/* Desktop sidebar (always visible) */}
      <div className="hidden md:block w-48 bg-[var(--bg-secondary)] border-r border-[var(--border-color)] flex-shrink-0">
        <SidebarContent />
      </div>
    </>
  );
}
