import { ArticlesList } from "@/components/ArticlesList";
import { Intro } from "@/components/Intro";
import { PostItemSmall } from "@/components/PostItemSmall";
import { getAllPosts, getAllTags } from "@/shared/api";
import { notFound } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return getAllTags().map((tag) => ({
    slug: tag.slug,
  }));
}

export default async function Tag({ params }) {
  const posts = getAllPosts().filter((post) =>
    post.data.tags.some((tag) => tag.slug === params.slug)
  );

  if (!posts) notFound();

  const tagObject = posts
    .at(0)
    .data.tags.find((tag) => tag.slug === params.slug);

  return (
    <>
      <Intro
        title={<>Articles tagged under &laquo;{tagObject.name}&raquo;</>}
      />

      <div className="h-14" />

      <ArticlesList
        className="flex  flex-col space-y-16 "
        variant={PostItemSmall}
        posts={posts}
      />
    </>
  );
}
