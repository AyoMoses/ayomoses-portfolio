import { ProjectSlider } from './ProjectSlider';

export const ProjectsPage = () => {
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>

      <ProjectSlider
        projStack="ReactJS"
        sectionHeader="ReactJS based Projects"
      />
    </div>
  );
};
