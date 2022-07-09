import Project from "./Project";
import SectionTitle from "./SectionTitle";

const Projects = ({ projects }) => {
  return (
    <section id="work">
      <SectionTitle>02. A few open source projects</SectionTitle>
      <div className="h-10" />
      <div className="flex flex-nowrap gap-6 overflow-x-auto snap-x snap-mandatory md:grid-cols-3">
        {projects.slice(0, 4).map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
