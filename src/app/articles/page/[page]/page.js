import { ArticlesList } from "@/components/ArticlesList";
import { Intro, IntroText, IntroTitle } from "@/components/Intro";
import { Pager } from "@/components/Pager";

import { getAllPosts, getPostsCount } from "@/shared/api";
import { POSTS_PER_PAGE } from "@/shared/constants";

export async function generateStaticParams() {
  const posts = getAllPosts(); // [{...post}, ...]
  const pages = Math.ceil(posts.length / POSTS_PER_PAGE); // 3
  const pagesArray = Array.from(Array(pages).keys(), (item) => item + 1); // [1, 2, 3]
  return pagesArray.map((page) => ({ page: String(page) })); // [{page: '1'}, ...]
}

export default async function Articles(props) {
  const params = await props.params;
  const { page: currentPage = 1 } = params;
  const posts = getAllPosts((currentPage - 1) * POSTS_PER_PAGE);
  const postsCount = getPostsCount();
  const pages = Math.ceil(postsCount / POSTS_PER_PAGE); // 3

  return (
    <>
      <Intro>
        <IntroTitle>Articles</IntroTitle>
        <IntroText>
          Latest articles written by me, for no reason. Page {currentPage} of
          {pages}
        </IntroText>
      </Intro>

      <div className="h-14" />

      <ArticlesList
        posts={posts}
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
