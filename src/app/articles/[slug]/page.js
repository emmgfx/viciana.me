import { notFound } from "next/navigation";

import { PostDetail } from "@/components/PostDetail";
import { getPostBySlug, getPostSlugs } from "@/shared/api";

export async function generateMetadata({ params }, parent) {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  return {
    title: post.data.title,
    openGraph: {
      images: [
        {
          url: `/api/og?title=${post.data.title}&tags=${post.data.tags
            .map((tag) => tag.name)
            .join(",")}&width=1200&height=630`,
          width: 1200,
          height: 630,
          alt: post.data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      siteId: "1467726470533754880",
      creator: "@josep_viciana",
      images: {
        url: `/api/og?title=${post.data.title}&tags=${post.data.tags
          .map((tag) => tag.name)
          .join(",")}&width=1600&height=900`,
        alt: post.data.title,
      },
    },
  };
}

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
