import { getAllPosts, getAllTags } from "@/shared/api";

export default function sitemap() {
  const BASE_URL = "https://www.viciana.me";
  const getUrl = (path) => new URL(path, BASE_URL).toString();

  return [
    {
      url: getUrl("/"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: getUrl("/articles"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...getAllPosts().map((post) => ({
      url: getUrl(`/articles/${post.slug}`),
      lastModified: new Date(post.data.date),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...getAllTags().map((tag) => ({
      url: getUrl(`/articles/tag/${tag.slug}`),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    {
      url: getUrl("/uses"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: getUrl("/about-me"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
