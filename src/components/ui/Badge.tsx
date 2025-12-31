import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const techColors: Record<string, string> = {
  "Next.js": "bg-black text-white",
  React: "bg-[#61dafb]/20 text-[#61dafb]",
  TypeScript: "bg-[#3178c6]/20 text-[#3178c6]",
  "Tailwind CSS": "bg-[#38bdf8]/20 text-[#38bdf8]",
  "Canvas API": "bg-[#f97316]/20 text-[#f97316]",
  CSS: "bg-[#264de4]/20 text-[#264de4]",
  JavaScript: "bg-[#f7df1e]/20 text-[#f7df1e]",
};

export function Badge({ children, className }: BadgeProps) {
  const colorClass =
    typeof children === "string"
      ? techColors[children] || "bg-[var(--bg-hover)] text-[var(--text-primary)]"
      : "bg-[var(--bg-hover)] text-[var(--text-primary)]";

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs rounded",
        colorClass,
        className
      )}
    >
      {children}
    </span>
  );
}
