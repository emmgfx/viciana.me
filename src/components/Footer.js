import Link from "next/link";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="text-sm mt-16 border-t border-t-slate-700">
      <div className="text-center py-4 md:py-8 px-4 md:px-8 text-slate-400">
        &copy; {date.getFullYear()}{" "}
        <Link
          href="/"
          className="focus-visible:underline focus-visible:outline-none"
        >
          Josep Viciana
        </Link>
      </div>
    </footer>
  );
};
