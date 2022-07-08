import Project from "./Project";
import SectionTitle from "./SectionTitle";

const Projects = ({ projects }) => {
  return (
    <section id="work">
      <SectionTitle>02. A few open source projects</SectionTitle>
      <div className="h-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.slice(0, 4).map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
