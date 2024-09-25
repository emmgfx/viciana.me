import { ArticlesList } from "@/components/ArticlesList";
import { Intro } from "@/components/Intro";
import { Pager } from "@/components/Pager";

import { getAllPosts, getPostsCount } from "@/shared/api";
import { POSTS_PER_PAGE } from "@/shared/constants";

export default async function Articles({ params }) {
  const postsCount = getPostsCount();
  const posts = getAllPosts();

  const { page: currentPage = 1 } = params;

  return (
    <>
      <Intro
        title="Articles"
        text="Latest articles written by me, for no reason"
      />

      <div className="h-14" />

      <ArticlesList
        posts={posts.slice()}
        className="flex flex-col space-y-16 mx-auto"
      />

      {Math.ceil(postsCount / POSTS_PER_PAGE) > 1 && (
        <>
          <div className="h-14" />

          <Pager
            currentPage={currentPage}
            itemsPerPage={POSTS_PER_PAGE}
            items={postsCount}
            path="/articles/page"
            type="param"
          />
        </>
      )}
    </>
  );
}
