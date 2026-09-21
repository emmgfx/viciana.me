import GithubSlugger from "github-slugger";

const isFence = (line) => line.startsWith("```") || line.startsWith("~~~");

// "## Some title" -> { level: 2, text: "Some title" }
const parseHeading = (line) => {
  const match = line.match(/^(#{2,3}) (.+)$/);
  if (!match) return null;
  return { level: match[1].length, text: match[2].trim() };
};

// Links, bold and inline code would otherwise show their markdown characters.
const stripFormatting = (text) =>
  text
    .replaceAll("`", "")
    .replaceAll("**", "")
    .replace(/\[(.+?)\]\(.+?\)/g, "$1");

export function getHeadings(markdown = "") {
  // Same slugger rehype-slug uses, so these ids match the rendered HTML.
  const slugger = new GithubSlugger();
  const headings = [];
  let insideCode = false;

  for (const line of markdown.split("\n")) {
    if (isFence(line.trim())) {
      insideCode = !insideCode;
      continue;
    }
    if (insideCode) continue;

    const heading = parseHeading(line);
    if (!heading) continue;

    const text = stripFormatting(heading.text);
    headings.push({ level: heading.level, text, id: slugger.slug(text) });
  }

  return headings;
}
