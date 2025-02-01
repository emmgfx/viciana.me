"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import { usePrevious } from "@/hooks/usePrevious";

import { MenuIcon } from "lucide-react";

import { NAVIGATION } from "@/shared/constants";

export const MobileNavigation = () => {
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();
  const previousPathname = usePrevious(pathname);
  const [hide, setHide] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const open = () => {
    setHide(false);
    mobileMenuRef.current.showModal();
    setExpanded(true);
  };

  const close = () => {
    if (!mobileMenuRef.current.open) return;
    setHide(true);
    mobileMenuRef.current.addEventListener(
      "webkitAnimationEnd",
      () => {
        setHide(false);
        mobileMenuRef.current.close();
        setExpanded(false);
      },
      { once: true }
    );
  };

  useEffect(() => {
    if (!previousPathname) return;
    if (previousPathname === pathname) return;
    setTimeout(close, 500);
    // close();
  }, [pathname, previousPathname]);

  return (
    <>
      <button
        onClick={open}
        className="block md:hidden p-2 border border-slate-700 hover:bg-slate-700 text-slate-400 bg-slate-900 hover:text-slate-100 m-px rounded-full focus-visible:outline outline-2 outline-slate-400 -outline-offset-1 focus-visible:text-slate-100 focus-visible:bg-slate-800"
        aria-label="Open navigation menu"
        aria-expanded={expanded ? "true" : "false"}
      >
        <MenuIcon className="size-5" />
      </button>
      <dialog
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className={twMerge(
          "rounded-[36px] bg-transparent w-full sm:max-w-sm shadow-sm mb-4 mt-auto mx-auto transition-all",
          // Backdrop
          "backdrop:backdrop-blur-xl",
          !hide && "backdrop:animate-backdrop-show animate-show",
          hide && "backdrop:animate-backdrop-hide animate-hide"
        )}
        ref={mobileMenuRef}
      >
        <div className="py-4 px-8 bg-slate-700 text-slate-200">
          <ul className="text-sm">
            <MobileNavigationLink
              name="Home"
              href="/"
              active={pathname === "/"}
            />
            {NAVIGATION.map(({ name, href }) => (
              <MobileNavigationLink
                key={name}
                name={name}
                href={href}
                active={pathname.startsWith(href)}
              />
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
};

const MobileNavigationLink = ({ name, href, active }) => {
  return (
    <li>
      <Link
        href={href}
        className={twMerge(
          "flex items-center py-4 focus-visible:outline outline-2 outline-slate-300 -outline-offset-2 rounded-full -mx-4 px-5",
          active && "bg-slate-600 transition"
        )}
      >
        {name}
      </Link>
    </li>
  );
};
