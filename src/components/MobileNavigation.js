"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { usePrevious } from "@uidotdev/usehooks";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import { ChevronRightIcon, MenuIcon, XIcon } from "lucide-react";

import { NAVIGATION } from "@/shared/constants";

export const MobileNavigation = () => {
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();
  const previousPathname = usePrevious(pathname);
  const [hide, setHide] = useState(true);

  const open = () => {
    setHide(false);
    mobileMenuRef.current.showModal();
    document.querySelector("body").style.overflow = "hidden";
  };

  const close = () => {
    if (!mobileMenuRef.current.open) return;
    document.querySelector("body").style.overflow = "auto";
    setHide(true);
    mobileMenuRef.current.addEventListener(
      "webkitAnimationEnd",
      () => {
        setHide(false);
        mobileMenuRef.current.close();
      },
      { once: true }
    );
  };

  useEffect(() => {
    if (previousPathname === null) return;
    close();
  }, [pathname, previousPathname]);

  return (
    <>
      <div className="border border-slate-700 rounded-full text-sm text-slate-400 bg-slate-900 truncate md:hidden">
        <button
          onClick={open}
          className="block px-2 py-2 hover:text-slate-100 transition m-px rounded-full"
        >
          <MenuIcon className="size-5" />
        </button>
      </div>
      <dialog
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className={twMerge(
          "rounded-lg bg-transparent w-full sm:w-1/2 shadow",
          // Backdrop
          "backdrop:backdrop-blur-xl",
          !hide && "backdrop:animate-backdrop-show animate-show",
          hide && "backdrop:animate-backdrop-hide animate-hide"
        )}
        ref={mobileMenuRef}
      >
        <div className="py-4 px-8 bg-slate-700 text-slate-200">
          <header className="flex items-center justify-between py-4">
            <div className="text-xs text-slate-400">
              Navigation: {hide && "hide"}
            </div>
            <button onClick={close}>
              <XIcon className="size-6" />
            </button>
          </header>
          <ul className="divide-y divide-slate-600 text-sm">
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
        className="flex items-center py-4 hover:bg-slate-600 -mx-4 px-4 rounded-md hover:outline outline-slate-600 focus-visible:outline focus-visible:bg-slate-600"
      >
        {active && <ChevronRightIcon className="block size-4 mr-2" />}
        {name}
      </Link>
    </li>
  );
};
