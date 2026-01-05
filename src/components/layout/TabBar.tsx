"use client";

import { FileCode, X, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/constants";
import { useTabs } from "@/contexts/TabsContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useSidebar } from "@/contexts/SidebarContext";

export function TabBar() {
  const { openTabs, activeTab, openTab, closeTab } = useTabs();
  const { isGeek } = useTheme();
  const { setMobileOpen } = useSidebar();

  // Get tab info from navItems
  const getTabInfo = (path: string) => {
    return navItems.find((item) => item.path === path);
  };

  // Get current page name for breadcrumb
  const getCurrentPageName = () => {
    const item = getTabInfo(activeTab);
    if (!item) return "Home";
    const cleanName = item.name.replace(".tsx", "");
    return cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
  };

  // Sort open tabs by their order in navItems
  const sortedTabs = openTabs
    .map((path) => getTabInfo(path))
    .filter(Boolean)
    .sort((a, b) => {
      const aIndex = navItems.findIndex((item) => item.path === a?.path);
      const bIndex = navItems.findIndex((item) => item.path === b?.path);
      return aIndex - bIndex;
    });

  const handleTabClick = (path: string) => {
    openTab(path);
  };

  const handleCloseClick = (e: React.MouseEvent, path: string) => {
    e.stopPropagation();
    closeTab(path);
  };

  // Regular mode: Simple breadcrumb
  if (!isGeek) {
    return (
      <nav className="flex items-center gap-1 px-4 py-3 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-1 mr-2 hover:bg-[var(--bg-hover)] rounded transition-colors"
          aria-label="Open navigation"
        >
          <Menu size={20} className="text-[var(--text-primary)]" />
        </button>
        <span className="text-[var(--text-secondary)]">Tomaz Junior</span>
        <ChevronRight size={14} className="text-[var(--text-muted)]" />
        <span className="text-[var(--accent-primary)] font-medium">
          {getCurrentPageName()}
        </span>
      </nav>
    );
  }

  // Geek mode: IDE-style tabs
  return (
    <div className="flex bg-[var(--bg-secondary)] border-b border-[var(--border-color)] overflow-x-auto">
      {sortedTabs.map((item) => {
        if (!item) return null;
        const isActive = activeTab === item.path;
        return (
          <button
            key={item.path}
            onClick={() => handleTabClick(item.path)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm border-r border-[var(--border-color)]",
              "hover:bg-[var(--bg-hover)] transition-colors",
              "group cursor-pointer",
              isActive
                ? "bg-[var(--bg-primary)] text-[var(--text-primary)] border-t-2 border-t-[var(--accent-primary)]"
                : "text-[var(--text-secondary)] border-t-2 border-t-transparent"
            )}
          >
            <FileCode size={14} className="text-[var(--syntax-keyword)]" />
            <span className="whitespace-nowrap">{item.name}</span>
            <span
              onClick={(e) => handleCloseClick(e, item.path)}
              className={cn(
                "p-0.5 rounded hover:bg-[var(--bg-hover)] transition-opacity",
                isActive
                  ? "opacity-70 hover:opacity-100"
                  : "opacity-0 group-hover:opacity-70 hover:!opacity-100"
              )}
            >
              <X size={14} />
            </span>
          </button>
        );
      })}
    </div>
  );
}
