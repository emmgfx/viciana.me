import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const Pager = ({
  items = 0,
  itemsPerPage = 1,
  currentPage = 1,
  path = "/",
  type = "param",
}) => {
  if (!["param", "searchParam"].includes(type)) throw new Error("Invalid type");

  const pages = Math.ceil(items / itemsPerPage);

  return (
    <div className="">
      <ul className="flex gap-2 justify-center">
        {Array.from(Array(pages).keys(), (item) => item + 1).map((page) => {
          const href =
            type === "searchParam"
              ? `${path}/?page=${page}`
              : `${path}/${page}`;

          return (
            <li key={page}>
              <Link
                href={href}
                className={twMerge(
                  "flex items-center justify-center w-10 h-10 rounded-lg bg-slate-500/20 text-slate-400",
                  "hover:bg-slate-500/50 hover:text-slate-200 transition",
                  page === Number(currentPage) &&
                    "text-slate-200 bg-slate-500/50"
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
