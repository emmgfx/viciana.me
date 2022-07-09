import { decode } from "html-entities";

import IconArrow from "../public/images/icons/icon-arrow-right.svg";

const Project = ({ project }) => {
  return (
    <article className="basis-3/4 shrink-0 md:basis-auto md:shrink">
      <img
        src={project.image.url}
        alt={project.title}
        className="aspect-video object-cover"
      />
      <div className="h-4" />
      <h3 className="font-mono font-bold text-primary truncate">
        {project.title}
      </h3>
      <div className="h-4" />
      <p className="font-normal text-base line-clamp-4 leading-7">
        {decode(project.description).replace(/(<([^>]+)>)/gi, "")}
      </p>
      <div className="h-5" />
      <a
        title={project.title}
        href={project.url}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`See more about ${project.title}`}
        className="group block text-primary hover:text-white font-mono font-bold text-sm text-right"
      >
        See project{" "}
        <IconArrow className="inline-block group-hover:translate-x-1 transition-transform duration-200" />
      </a>
    </article>
  );
};

export default Project;
