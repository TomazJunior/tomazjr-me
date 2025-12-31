"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { navItems } from "@/lib/constants";

interface TabsContextType {
  openTabs: string[];
  activeTab: string;
  openTab: (path: string) => void;
  closeTab: (path: string) => void;
  isTabOpen: (path: string) => boolean;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-open-tabs";

export function TabsProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [openTabs, setOpenTabs] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage or default to current page
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Ensure current path is in open tabs
        if (!parsed.includes(pathname)) {
          parsed.push(pathname);
        }
        setOpenTabs(parsed);
      } catch {
        setOpenTabs([pathname]);
      }
    } else {
      // Default: open home tab
      setOpenTabs([pathname]);
    }
    setIsInitialized(true);
  }, []);

  // Ensure current pathname is always in open tabs
  useEffect(() => {
    if (isInitialized && !openTabs.includes(pathname)) {
      setOpenTabs((prev) => [...prev, pathname]);
    }
  }, [pathname, isInitialized]);

  // Persist to localStorage
  useEffect(() => {
    if (isInitialized && openTabs.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(openTabs));
    }
  }, [openTabs, isInitialized]);

  const openTab = (path: string) => {
    if (!openTabs.includes(path)) {
      setOpenTabs((prev) => [...prev, path]);
    }
    router.push(path);
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
      const nextTab = newTabs[Math.min(currentIndex, newTabs.length - 1)] || newTabs[0];
      router.push(nextTab);
    }
  };

  const isTabOpen = (path: string) => openTabs.includes(path);

  // Get tab name from navItems
  const getTabName = (path: string) => {
    const item = navItems.find((item) => item.path === path);
    return item?.name || path;
  };

  return (
    <TabsContext.Provider
      value={{
        openTabs,
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
