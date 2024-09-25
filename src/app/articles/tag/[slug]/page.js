import { ArticlesList } from "@/components/ArticlesList";
import { Intro, IntroText, IntroTitle } from "@/components/Intro";
import { getAllPosts, getAllTags } from "@/shared/api";
import { notFound } from "next/navigation";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return getAllTags().map((tag) => ({
    slug: tag.slug,
  }));
}

export default async function Tag({ params }) {
  const posts = getAllPosts(0, 999).filter((post) =>
    post.data.tags.some((tag) => tag.slug === params.slug)
  );

  if (!posts || posts.length === 0) notFound();

  const tagObject = posts
    .at(0)
    .data.tags.find((tag) => tag.slug === params.slug);

  return (
    <>
      <Intro>
        <IntroTitle>Searching by tag</IntroTitle>
        <IntroText>
          Articles tagged under &laquo;{tagObject.name}&raquo;
        </IntroText>
      </Intro>

      <div className="h-14" />

      <ArticlesList className="space-y-16" posts={posts} />
    </>
  );
}
