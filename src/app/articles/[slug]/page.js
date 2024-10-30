import { notFound } from "next/navigation";

import { PostDetail } from "@/components/PostDetail";
import { getPostBySlug, getPostSlugs } from "@/shared/api";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function Article(props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  return <PostDetail post={post} />;
}
