"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SchemeAccordionProps {
  id: string;
  icon: LucideIcon;
  title: string;
  preview: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export default function SchemeAccordion({
  id,
  icon: Icon,
  title,
  preview,
  children,
  defaultOpen = false,
}: SchemeAccordionProps) {
  return (
    <details
      id={id}
      open={defaultOpen}
      className="group scroll-mt-28 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 open:shadow-lg open:border-cyan-200/80"
    >
      <summary className="flex cursor-pointer list-none items-start gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
        <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-cyan-300 transition-colors duration-300 group-open:bg-cyan-500 group-open:text-slate-950">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-lg font-semibold text-slate-900 sm:text-xl">
            {title}
          </span>
          <span className="mt-1.5 line-clamp-2 block text-sm leading-relaxed text-slate-500 group-open:hidden">
            {preview}
          </span>
        </span>
        <ChevronDown
          className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180 group-open:text-cyan-600"
          aria-hidden="true"
        />
      </summary>
      <div className="border-t border-slate-100 px-5 pb-7 pt-5 text-[15px] leading-relaxed text-slate-700 sm:px-6 sm:text-base [&_a]:text-cyan-700 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-cyan-800 [&_p+p]:mt-3">
        {children}
      </div>
    </details>
  );
}
