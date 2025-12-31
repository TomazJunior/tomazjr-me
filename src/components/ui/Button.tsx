import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", isLoading, className, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "px-4 py-2 rounded text-sm font-medium transition-colors",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variant === "primary" && [
            "bg-[var(--accent-primary)] text-white",
            "hover:bg-[#1a8ad4]",
          ],
          variant === "secondary" && [
            "bg-[var(--bg-secondary)] text-[var(--text-primary)]",
            "border border-[var(--border-color)]",
            "hover:bg-[var(--bg-hover)]",
          ],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Executing...</span>
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
