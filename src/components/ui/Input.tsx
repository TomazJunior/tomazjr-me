import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="block text-sm text-[var(--syntax-variable)]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "w-full px-3 py-2 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded",
            "text-[var(--text-primary)] placeholder-[var(--text-muted)]",
            "focus:border-[var(--accent-primary)] focus:ring-0",
            "transition-colors",
            error && "border-[var(--accent-error)]",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-[var(--accent-error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
