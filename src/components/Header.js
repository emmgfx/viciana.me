import Link from "next/link";

import { Navigation } from "@/components/Navigation";
import { MobileNavigation } from "@/components/MobileNavigation";

export const Header = () => {
  return (
    <header className="py-4 md:py-8 border-b border-b-slate-800 mb-6 md:mb-8">
      <div className="flex items-center justify-between max-w-5xl px-4 md:px-8 mx-auto">
        <Link
          href="/"
          className="focus-visible:underline focus-visible:outline-hidden"
        >
          <h1 className="font-extrabold text-xl py-1.5">JOSEP VICIANA</h1>
        </Link>
        <Navigation className="ml-auto hidden md:block" />
        <MobileNavigation />
      </div>
    </header>
  );
};
