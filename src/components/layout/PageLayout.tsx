import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

export function SectionCard({ title, description, children, className = "" }: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm shadow-slate-200/50 ${className}`}
    >
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{title}</p>
        <p className="mt-3 text-base leading-7 text-slate-700">{description}</p>
      </div>
      {children}
    </section>
  );
}
