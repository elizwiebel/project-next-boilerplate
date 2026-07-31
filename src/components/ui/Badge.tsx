import type { HTMLAttributes } from "react";

type BadgeVariant = "neutral" | "accent" | "success" | "warning";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  className?: string;
}

const BADGE_STYLES: Record<BadgeVariant, string> = {
  neutral: "bg-slate-100 text-slate-700 border border-slate-200",
  accent: "bg-sky-100 text-sky-700 border border-sky-200",
  success: "bg-emerald-100 text-emerald-700 border border-emerald-200",
  warning: "bg-amber-100 text-amber-800 border border-amber-200",
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
