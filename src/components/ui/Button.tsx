import type { ComponentPropsWithoutRef, ElementType } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonOwnProps<T extends ElementType = "button"> = {
  variant?: ButtonVariant;
  className?: string;
  as?: T;
};

export type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-950 text-white border-slate-950 hover:bg-slate-800 focus-visible:ring-slate-500",
  secondary:
    "bg-white text-slate-950 border-slate-200 hover:bg-slate-50 focus-visible:ring-slate-400",
  ghost:
    "bg-transparent text-slate-950 border-transparent hover:bg-slate-100 focus-visible:ring-slate-400",
};

export function Button<T extends ElementType = "button">({
  as,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_STYLES[variant]} ${className}`}
      {...props}
    />
  );
}
