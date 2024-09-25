import { PostItem } from "./PostItem";

export const ArticlesList = ({
  posts = [],
  className,
  variant: Variant = PostItem,
}) => {
  return (
    <div className={className}>
      {posts.map((post, index) => (
        <Variant key={index} post={post} />
      ))}
    </div>
  );
};
