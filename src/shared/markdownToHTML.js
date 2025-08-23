import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import { remarkAlert } from "remark-github-blockquote-alert";

export default async function markdownToHtml(markdown) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkAlert)
    .use(remarkRehype, { allowDangerousHtml: true })
    // .use(rehypeRaw)
    // .use(rehypeSanitize, {
    //   ...defaultSchema,
    //   tagNames: [...defaultSchema.tagNames, "iframe", "svg"],
    //   attributes: {
    //     ...defaultSchema.attributes,
    //     iframe: [
    //       "src",
    //       "height",
    //       "style",
    //       "scrolling",
    //       "title",
    //       "frameborder",
    //       "loading",
    //       "allowtransparency",
    //       "allowfullscreen",
    //     ],
    //     svg: ["width", "height", "viewBox"],
    //   },
    // })
    .use(rehypePrettyCode, {
      // See Options section below.
      theme: "material-theme-palenight",
      // theme: "one-dark-pro",
      keepBackground: false,
    })
    .use(rehypeStringify)
    .use(rehypeSlug)
    .process(markdown);
  return file.toString();
}
