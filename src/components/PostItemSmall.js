import Link from "next/link";
import DateFormatter from "./DateFormatter";
import { ReadMore } from "./ReadMore";

export const PostItemSmall = async ({ post }) => {
  const { data: metadata, slug } = post;

  return (
    <article className="relative">
      <Link
        href={`/articles/${slug}`}
        className="focus-visible:underline focus-visible:outline-hidden"
      >
        <span className="absolute bg-transparent hover:bg-slate-600/10 rounded-xl hover:-inset-y-4 hover:-inset-x-6 inset-0 transition-all"></span>
        <h1 className="font-semibold text-slate-100">{metadata.title}</h1>
      </Link>
      <div className="h-2" />
      <DateFormatter
        className="order-0 text-slate-400 text-sm font-semibold mt-1"
        dateObject={metadata.date}
      />
      <div className="h-2" />
      <p className="text-sm text-slate-400 z-10">{metadata.excerpt}</p>
      <div className="h-4" />
      <ReadMore />
    </article>
  );
};
