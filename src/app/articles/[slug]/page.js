import { notFound } from "next/navigation";
import Script from "next/script";

import { PostDetail } from "@/components/PostDetail";
import { getPostBySlug, getPostSlugs } from "@/shared/api";

export async function generateMetadata({ params }, parent) {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  return {
    title: post.data.title,
    description: post.data.description,
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.viciana.me/articles/2025-08-23-use-polymorphism-to-ditch-legacybehavior-nextjs",
    },
    headline: post.data.title,
    description: post.data.description,
    image: "https://www.viciana.me/images/polymorphism-nextjs-cover.jpg",
    author: {
      "@type": "Person",
      name: "Josep Viciana",
      alternateName: "emmgfx",
      description: "Software developer",
      image: "https://www.viciana.me/avatar.jpeg",
      sameAs: [
        "https://www.viciana.me",
        "https://www.emm-gfx.net",
        "https://x.com/josep_viciana",
        "https://www.linkedin.com/in/josep-viciana/",
        "https://github.com/emmgfx",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "viciana.me",
      logo: {
        "@type": "ImageObject",
        url: "https://www.viciana.me/avatar.jpeg",
      },
    },
    datePublished: post.data.date,
    dateModified: post.data.date,
  };

  return (
    <>
      <Script
        id="post-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <PostDetail post={post} />
    </>
  );
}
