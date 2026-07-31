import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={`rounded-[28px] border border-slate-200/80 bg-white/95 p-6 shadow-sm shadow-slate-200/60 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children }: CardProps) {
  return <div className={`space-y-2 ${className}`}>{children}</div>;
}

export function CardTitle({ className = "", children }: CardProps) {
  return <h2 className={`text-xl font-semibold text-slate-950 ${className}`}>{children}</h2>;
}

export function CardDescription({ className = "", children }: CardProps) {
  return <p className={`text-sm leading-6 text-slate-600 ${className}`}>{children}</p>;
}

export function CardContent({ className = "", children }: CardProps) {
  return <div className={`mt-6 ${className}`}>{children}</div>;
}

export function CardFooter({ className = "", children }: CardProps) {
  return <div className={`mt-6 border-t border-slate-100 pt-4 ${className}`}>{children}</div>;
}
