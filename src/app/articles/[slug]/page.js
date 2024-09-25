import { notFound } from "next/navigation";

import { PostDetail } from "@/components/PostDetail";
import { getPostBySlug, getPostSlugs } from "@/shared/api";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  // console.log(
  //   slugs.map((slug) => ({
  //     slug: slug,
  //   }))
  // );
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function Article({ params }) {
  const post = getPostBySlug(params.slug);
  // console.log(post.data);
  if (!post) notFound();
  return <PostDetail post={post} />;
}
