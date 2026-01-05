"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface TabsContextType {
  openTabs: string[];
  activeTab: string;
  openTab: (path: string) => void;
  closeTab: (path: string) => void;
  isTabOpen: (path: string) => boolean;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-open-tabs";

function getInitialTabs(pathname: string): string[] {
  if (typeof window === "undefined") return [pathname];
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (!parsed.includes(pathname)) {
        parsed.push(pathname);
      }
      return parsed;
    } catch {
      return [pathname];
    }
  }
  return [pathname];
}

export function TabsProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [openTabs, setOpenTabs] = useState<string[]>(() =>
    getInitialTabs(pathname)
  );

  // Persist to localStorage
  useEffect(() => {
    if (openTabs.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(openTabs));
    }
  }, [openTabs]);

  // Ensure current pathname is in tabs (computed, no effect needed)
  const effectiveOpenTabs = openTabs.includes(pathname)
    ? openTabs
    : [...openTabs, pathname];

  const buildUrlWithMode = (path: string) => {
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");
    return mode ? `${path}?mode=${mode}` : path;
  };

  const openTab = (path: string) => {
    if (!openTabs.includes(path)) {
      setOpenTabs((prev) => [...prev, path]);
    }
    router.push(buildUrlWithMode(path));
  };

  const closeTab = (path: string) => {
    // Can't close the last tab
    if (openTabs.length <= 1) return;

    const newTabs = openTabs.filter((t) => t !== path);
    setOpenTabs(newTabs);

    // If closing active tab, navigate to another open tab
    if (pathname === path) {
      const currentIndex = openTabs.indexOf(path);
      // Try to go to the tab on the left, or the first open tab
      const nextTab =
        newTabs[Math.min(currentIndex, newTabs.length - 1)] || newTabs[0];
      router.push(buildUrlWithMode(nextTab));
    }
  };

  const isTabOpen = (path: string) => effectiveOpenTabs.includes(path);

  return (
    <TabsContext.Provider
      value={{
        openTabs: effectiveOpenTabs,
        activeTab: pathname,
        openTab,
        closeTab,
        isTabOpen,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
}
