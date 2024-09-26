import Link from "next/link";
import DateFormatter from "./DateFormatter";
import { ReadMore } from "./ReadMore";

export const PostItem = async ({ post }) => {
  const { data: metadata, slug } = post;

  return (
    <article className="grid md:grid-cols-4 md:gap-8">
      <div className="col-span-3 order-1 relative">
        <Link href={`/articles/${slug}`}>
          <span className="absolute bg-transparent hover:bg-slate-600/10 rounded-xl hover:-inset-y-4 hover:-inset-x-6 inset-0 transition-all"></span>
          <h1 className="font-semibold text-slate-100">{metadata.title}</h1>
        </Link>
        <div className="md:hidden">
          <div className="h-4" />
          <DateFormatter
            className="order-0 text-slate-400 text-sm font-semibold mt-1"
            dateObject={metadata.date}
          />
        </div>
        <div className="h-4" />
        <p className="text-sm text-slate-400 z-10">{metadata.excerpt}</p>
        <div className="h-4" />
        <ReadMore />
      </div>
      <DateFormatter
        className="order-0 text-slate-400 text-sm font-semibold mt-1 hidden md:block"
        dateObject={metadata.date}
      />
    </article>
  );
};
