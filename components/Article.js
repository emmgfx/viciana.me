import IconArrow from "../public/images/icons/icon-arrow-right.svg";

const Articles = ({ article }) => {
  return (
    <article className="py-6 px-8 bg-[#102340]">
      <h3 className="font-mono font-bold mb-4 line-clamp-2 leading-8">
        {article.title.rendered}
      </h3>
      <p className="font-normal text-base mb-5 line-clamp-5 leading-7">
        {article.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}
      </p>
      <a
        title={article.title.rendered}
        href={article.link}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Read article ${article.title.rendered}`}
        className="group block text-primary hover:text-white font-mono font-bold text-sm text-right"
      >
        Read more{" "}
        <IconArrow className="inline-block group-hover:translate-x-1 transition-transform duration-200" />
      </a>
    </article>
  );
};

export default Articles;
