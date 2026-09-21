"use client";

import { useEffect, useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const update = () => {
      const readingLine = window.innerHeight * 0.3;
      const passed = elements.filter(
        (element) => element.getBoundingClientRect().top <= readingLine
      );
      setActiveId(passed.length ? passed.at(-1).id : elements[0].id);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [headings]);

  return (
    <nav aria-label="Table of contents" className="w-full">
      <details className="group lg:hidden rounded-lg border border-slate-700 bg-slate-800/40 transition-colors open:border-slate-600 open:bg-slate-800/60 open:shadow-lg open:shadow-slate-950/50">
        <summary className="flex items-center justify-between gap-4 px-4 py-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-lg hover:bg-slate-800/40 [&_span]:text-slate-300 group-open:border-b group-open:border-slate-700 group-open:rounded-b-none group-open:[&_span]:text-slate-100">
          <Label />
          <ChevronDownIcon className="size-4 text-slate-400 transition-transform group-open:rotate-180 group-open:text-slate-200" />
        </summary>
        <div className="px-4 py-4">
          <List headings={headings} activeId={activeId} />
        </div>
      </details>
      <div className="hidden lg:block sticky top-24">
        <Label />
        <div className="h-4" />
        <List headings={headings} activeId={activeId} />
      </div>
    </nav>
  );
};

const Label = () => {
  return (
    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
      On this page
    </span>
  );
};

const List = ({ headings, activeId }) => {
  return (
    <ul className="space-y-2 border-l border-slate-800">
      {headings.map(({ id, text, level }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            aria-current={activeId === id ? "location" : undefined}
            className={[
              "block border-l -ml-px py-0.5 text-sm transition-colors",
              level === 3 ? "pl-7" : "pl-4",
              activeId === id
                ? "border-pink-500 text-slate-200"
                : "border-transparent text-slate-500 hover:text-slate-300",
            ].join(" ")}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
