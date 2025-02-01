"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { HouseIcon } from "lucide-react";
import { NAVIGATION } from "@/shared/constants";

export const Navigation = ({ className }) => {
  const pathname = usePathname();
  return (
    <nav className={className}>
      <ul className="flex w-min mx-auto border border-slate-700 rounded-full text-sm text-slate-400 bg-slate-900 truncate">
        <li>
          <Link
            href="/"
            className={twMerge([
              "block px-4 py-2 m-px transition rounded-full",
              "hover:text-slate-100",
              "focus-visible:outline-hidden focus-visible:bg-slate-800 focus-visible:underline",
              pathname === "/" && "text-slate-100 bg-slate-700",
            ])}
          >
            <HouseIcon className="size-5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {NAVIGATION.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              className={twMerge([
                "block px-4 py-2 m-px transition rounded-full",
                "hover:text-slate-100",
                "focus-visible:outline-hidden focus-visible:bg-slate-800 focus-visible:underline",
                pathname.startsWith(href) && "text-slate-100 bg-slate-700",
              ])}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
