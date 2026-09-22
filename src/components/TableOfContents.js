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
      <details className="group lg:hidden rounded-lg border border-slate-700 bg-slate-800/40 transition-colors open:border-slate-600 open:bg-slate-800/60 open:shadow-lg open:shadow-slate-950/50 details-content:h-0 open:details-content:h-auto details-content:opacity-0 open:details-content:opacity-100 details-content:[interpolate-size:allow-keywords] details-content:transition-all details-content:duration-300 details-content:overflow-hidden details-content:transition-discrete">
        <summary className="flex items-center justify-between gap-4 px-4 py-3 cursor-pointer list-none [&::-webkit-details-marker]:hidden rounded-lg hover:bg-slate-800/40 [&_span]:text-slate-300 group-open:[&_span]:text-slate-100">
          <Label />
          <ChevronDownIcon className="size-4 text-slate-400 transition-transform group-open:rotate-180 group-open:text-slate-200" />
        </summary>
        <div className="border-t border-slate-700 px-4 py-4">
          <PlainList headings={headings} />
        </div>
      </details>
      <div className="hidden lg:block">
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

// Smoothing every anchor jump site-wide would also animate the scroll
// restoration when navigating between pages, so it lives on the click here.
const scrollToHeading = (event) => {
  const hash = event.currentTarget.hash;
  const target = document.getElementById(hash.slice(1));
  if (!target) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth" });
  history.pushState(null, "", hash);
};

const List = ({ headings, activeId }) => {
  return (
    <ul className="space-y-2 border-l border-slate-800">
      {headings.map(({ id, text, level }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={scrollToHeading}
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

const PlainList = ({ headings }) => {
  return (
    <ul className="space-y-3">
      {headings.map(({ id, text, level }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={scrollToHeading}
            className={[
              "block text-sm text-slate-200 hover:text-white",
              level === 3 ? "pl-4" : "",
            ].join(" ")}
          >
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};
