import Link from "next/link";

export const Footer = () => {
  const date = new Date();
  return (
    <footer className="text-sm mt-6 md:mt-8 border-t border-t-slate-700">
      <div className="text-center py-4 md:py-8 px-4 md:px-8 text-slate-400">
        &copy; {date.getFullYear()},{" "}
        <address className="inline not-italic">
          <Link
            href="/"
            className="focus-visible:underline focus-visible:outline-none hover:underline"
          >
            Josep Viciana
          </Link>
        </address>
      </div>
    </footer>
  );
};
