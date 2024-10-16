import markdownToHtml from "@/shared/markdownToHTML";
import DateFormatter from "./DateFormatter";
import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, TagIcon } from "lucide-react";

export const PostDetail = async ({ post }) => {
  const { data: metadata, content } = post;
  let html = await markdownToHtml(content || "");

  return (
    <article>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
        {metadata.title}
      </h1>
      <div className="h-4" />

      <div className="flex flex-wrap gap-x-8 gap-y-2 text-slate-400 text-sm">
        <Date date={metadata.date} />
        <Tags tags={metadata.tags} />
      </div>

      <div className="h-11" />
      {metadata.image && (
        <>
          <Image
            src={metadata.image}
            width={1024}
            height={576}
            alt={metadata.title}
            className="w-full aspect-video object-center rounded-xl overflow-hidden"
            quality={100}
          />
          <div className="h-11" />
        </>
      )}

      <div
        className={[
          // Tailwind Prose
          "prose max-w-none prose-invert",
          // General block styles
          "prose-pre:bg-slate-950",
          // "[&_div[data-rehype-pretty-code-fragment]]:bg-white",
          "[&_div[data-rehype-pretty-code-fragment]]:rounded-2xl",
          "[&_div[data-rehype-pretty-code-fragment]]:overflow-hidden",
          "[&_div[data-rehype-pretty-code-fragment]_pre]:p-4",
          "[&_div[data-rehype-pretty-code-fragment]_pre]:m-0",
          "prose-code:before:content-['']",
          "prose-code:after:content-['']",
          "prose-code:px-1",
          "prose-code:py-0.5",
          "prose-code:rounded",
          "[&_div[data-rehype-pretty-code-fragment]]:my-8",
          "[&_div[data-rehype-pretty-code-fragment]_pre]:rounded-none",
          // Title
          "[&_div[data-rehype-pretty-code-title]]:bg-slate-600",
          "[&_div[data-rehype-pretty-code-title]]:text-slate-300",
          "[&_div[data-rehype-pretty-code-title]]:text-sm",
          "[&_div[data-rehype-pretty-code-title]]:font-semibold",
          "[&_div[data-rehype-pretty-code-title]]:px-6",
          "[&_div[data-rehype-pretty-code-title]]:py-2",
          // Highlighted lines
          "[&_span[data-highlighted-line]]:bg-slate-300/10",
          "[&_span[data-highlighted-line]]:rounded",
          // Highlighted chars
          "[&_mark[data-highlighted-chars]_span]:!text-purple-100",
          "[&_mark[data-highlighted-chars]]:bg-purple-600",
          "[&_mark[data-highlighted-chars]]:px-1.5",
          "[&_mark[data-highlighted-chars]]:py-0.5",
          "[&_mark[data-highlighted-chars]]:rounded-full",
        ].join(" ")}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
};

const Date = ({ date }) => {
  return (
    <div className="flex items-center gap-2">
      <CalendarIcon className="size-4" />
      <DateFormatter className="" dateObject={date} />
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <div className="flex items-center">
      <TagIcon className="size-4" />
      {tags.map((tag) => {
        return (
          <Link
            key={tag.slug}
            href={`/articles/tag/${tag.slug}`}
            className="inline-block py-1 px-2 hover:text-slate-200 hover:underline"
          >
            {tag.name}
          </Link>
        );
      })}
    </div>
  );
};
