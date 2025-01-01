import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { slugify } from "./utils";
import { POSTS_PER_PAGE } from "./constants";

const postsDirectory = join(process.cwd(), "content/posts");

export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isFile()) // Avoid folders
    .map((dirent) => dirent.name.replace(/\.md$/, "")) // Remove file extension
    .sort((a, b) => {
      const aDate = new Date(a.slice(0, 10));
      const bDate = new Date(b.slice(0, 10));
      if (aDate < bDate) return 1;
      if (aDate > bDate) return -1;
      return 0;
    });
}

export function getAllTags() {
  const tags = getAllPosts()
    // Extract tags
    .map(({ data }) => data.tags)
    // Merge in one array
    .reduce((acc, val) => [...acc, ...val])
    // Remove duplicates
    .reduce(
      (acc, tag) =>
        acc.some((item) => item.slug === tag.slug) ? acc : [...acc, tag],
      []
    );
  return tags;
}

const parseTags = (tags) => {
  return (
    tags
      // Only convert string tags
      .filter((tag) => typeof tag === "string")
      // Add slugs
      .map((name) => ({ name, slug: slugify(name) }))
      // Remove duplicates
      .reduce(
        (acc, tag) =>
          acc.some((item) => item.slug === tag.slug) ? acc : [...acc, tag],
        []
      )
  );
};

export function getPostBySlug(slug) {
  const fullPath = join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    data: { ...data, tags: parseTags(data.tags) },
    content,
    slug: slug,
  };
}

export function getPostsCount() {
  const slugs = getPostSlugs();
  return slugs.length;
}

export function getAllPosts(offset = 0, limit = POSTS_PER_PAGE) {
  const slugs = getPostSlugs();

  const posts = slugs
    .slice(offset, offset + limit)
    .map((slug) => getPostBySlug(slug))
    .filter((post) => !post.data.draft)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
