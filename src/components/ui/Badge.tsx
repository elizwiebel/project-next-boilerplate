import type { HTMLAttributes } from "react";

type BadgeVariant = "neutral" | "accent" | "success" | "warning";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  className?: string;
}

const BADGE_STYLES: Record<BadgeVariant, string> = {
  neutral: "bg-white text-black border border-black",
  accent: "bg-red text-white border border-red",
  success: "bg-blue text-white border border-blue",
  warning: "bg-blue text-white border border-blue",
};

export function Badge({ variant = "neutral", className = "", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[0.75rem] font-semibold uppercase tracking-[0.24em] ${BADGE_STYLES[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
