import { ProjectSlider } from './ProjectSlider';

export const ProjectsPage = () => {
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>

      <section className="projects__section">
        <h2 className="projects__section-header">ReactJS Projects</h2>

        <ProjectSlider projStack="ReactJS" />
      </section>
    </div>
  );
};
