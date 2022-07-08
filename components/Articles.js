import Article from "./Article";
import SectionTitle from "./SectionTitle";

const Articles = ({ articles }) => {
  return (
    <section>
      <SectionTitle>04. Some of my articles</SectionTitle>
      <div className="h-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.slice(0, 4).map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
