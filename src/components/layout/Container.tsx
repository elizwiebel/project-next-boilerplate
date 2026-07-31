import type { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export function Container({ className = "", children, ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-(--site-max-width) px-(--site-padding-x) ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
