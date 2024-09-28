"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { usePrevious } from "@uidotdev/usehooks";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import { MenuIcon, XIcon } from "lucide-react";

import { NAVIGATION } from "@/shared/constants";

export const MobileNavigation = () => {
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();
  const previousPathname = usePrevious(pathname);
  const [hide, setHide] = useState(true);

  const open = () => {
    setHide(false);
    mobileMenuRef.current.showModal();
  };

  const close = () => {
    if (!mobileMenuRef.current.open) return;
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
    setTimeout(close, 500);
    // close();
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
          "rounded-[36px] bg-transparent w-full sm:max-w-sm shadow mb-4 mt-auto mx-auto transition-all",
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
          "flex items-center py-4 focus-visible:underline focus-visible:outline-none rounded-full -mx-4 px-5",
          active && "bg-slate-600 transition"
        )}
      >
        {name}
      </Link>
    </li>
  );
};
