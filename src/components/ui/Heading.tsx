import type { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "spaced" | 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
}

const HEADING_STYLES: Record<number, string> = {
  spaced: "text-5xl font-semibold tracking-tight text-slate-950",
  1: "m0",
  2: "m0",
  3: "m0",
  4: "m0",
  5: "m0",
  6: "m0",
};

export function Heading({ level = 2, variant, className = "", children, ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`${HEADING_STYLES[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
