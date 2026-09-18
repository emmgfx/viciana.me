import { getAllPosts } from "@/shared/api";
import { BASE_URL } from "@/shared/constants";

const escapeXml = (value = "") =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET() {
  const posts = getAllPosts(0, 999);

  const items = posts
    .map(({ data, slug }) => {
      const url = `${BASE_URL}/articles/${slug}`;
      return [
        "    <item>",
        `      <title>${escapeXml(data.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(data.date).toUTCString()}</pubDate>`,
        `      <description>${escapeXml(data.description ?? data.excerpt ?? "")}</description>`,
        ...data.tags.map(
          (tag) => `      <category>${escapeXml(tag.name)}</category>`
        ),
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const lastBuildDate = posts.length
    ? new Date(posts[0].data.date).toUTCString()
    : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Josep Viciana</title>
    <link>${BASE_URL}</link>
    <description>Some of my thoughts, projects, photos. I usually write about technology.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
