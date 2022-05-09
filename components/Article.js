import { useState, useEffect } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";
import classNames from "classnames";

import IconArrow from "../public/images/icons/icon-arrow-right.svg";

const Article = ({ article }) => {
  const [ref, setRef] = useState(null);
  const [intersected, setIntersected] = useState(false);
  const { isIntersecting } = useIntersectionObserver(ref, { threshold: 0.33 });

  useEffect(() => {
    if (intersected) return;
    if (isIntersecting) setIntersected(true);
  }, [intersected, isIntersecting]);

  return (
    <article
      ref={setRef}
      className={classNames(
        "py-6 px-8 bg-[#102340] transition-all",
        !intersected && "opacity-0 translate-y-6",
        intersected && "opacity-100 translate-y-0"
      )}
    >
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

export default Article;
