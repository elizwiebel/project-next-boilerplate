import type { ElementType, HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: "spaced";
  children: ReactNode;
  className?: string;
}

const HEADING_STYLES: Record<string, string> = {
  spaced: "text-sm font-semibold uppercase tracking-[0.25em]",
  1: "m0",
  2: "m0",
  3: "m0",
  4: "m0",
  5: "m0",
  6: "m0",
};

export function Heading({ level, variant, className = "", children, ...props }: HeadingProps) {
  const Tag = `h${level}` as ElementType;
  const classes = `${HEADING_STYLES[variant ?? level]} ${className}`;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
