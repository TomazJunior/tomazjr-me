"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  FileCode,
  ChevronDown,
  ChevronRight,
  Files,
  X,
  LayoutList,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/constants";
import { useTabs } from "@/contexts/TabsContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useSidebar } from "@/contexts/SidebarContext";
import { ThemeToggle } from "@/components/features";

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { isMobileOpen, setMobileOpen } = useSidebar();
  const pathname = usePathname();
  const { openTab, isTabOpen } = useTabs();
  const { isGeek } = useTheme();

  const handleItemClick = (path: string) => {
    openTab(path);
    setMobileOpen(false);
  };

  // Get display name based on theme
  const getDisplayName = (name: string) => {
    if (isGeek) return name;
    // Remove .tsx extension and capitalize first letter
    const cleanName = name.replace(".tsx", "");
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
  };

  const SidebarContent = () => (
    <>
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-2 text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">
          {isGeek ? <Files size={14} /> : <LayoutList size={14} />}
          <span>{isGeek ? "Explorer" : "Navigation"}</span>
        </div>
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden p-1 hover:bg-[var(--bg-hover)] rounded transition-colors"
          aria-label="Close sidebar"
        >
          <X size={16} className="text-[var(--text-secondary)]" />
        </button>
      </div>

      {/* Project Section */}
      <div className="py-1">
        {isGeek && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 w-full px-2 py-1 text-[11px] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors uppercase tracking-wide font-semibold"
          >
            {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            <span>tomazjr-me</span>
          </button>
        )}

        {/* Navigation Items */}
        {(isGeek ? isExpanded : true) && (
          <div className={isGeek ? "pl-2" : ""}>
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
                  {isGeek && (
                    <FileCode
                      size={14}
                      className={cn(
                        isOpen
                          ? "text-[var(--syntax-keyword)]"
                          : "text-[var(--text-muted)]"
                      )}
                    />
                  )}
                  <span>{getDisplayName(item.name)}</span>
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
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
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
