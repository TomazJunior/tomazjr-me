"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

type ThemeMode = "geek" | "regular";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  isGeek: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME: ThemeMode = "geek";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(DEFAULT_THEME);
  const [mounted, setMounted] = useState(false);

  // Initialize from query string or localStorage
  useEffect(() => {
    // Check query string first (for shareable links)
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get("mode");
    if (modeParam === "geek" || modeParam === "regular") {
      setThemeState(modeParam);
      setMounted(true);
      return;
    }

    // Fall back to localStorage
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (stored === "geek" || stored === "regular") {
      setThemeState(stored);
    }
    setMounted(true);
  }, []);

  // Persist to localStorage, update document attribute, and update URL
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, theme);
      document.documentElement.setAttribute("data-theme", theme);

      // Update URL query string
      const url = new URL(window.location.href);
      url.searchParams.set("mode", theme);
      window.history.replaceState({}, "", url.toString());
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: ThemeMode) => setThemeState(newTheme);
  const toggleTheme = () =>
    setThemeState((prev) => (prev === "geek" ? "regular" : "geek"));

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        isGeek: theme === "geek",
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
