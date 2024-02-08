import { ProjectSlider } from './ProjectSlider';

export const ProjectsPage = () => {
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>

      <main className='projects__container'>
        <ProjectSlider projStack="NextJS" sectionHeader="NextJS & ReactJS Projects" />

        <ProjectSlider
          projStack="Sitewrench CMS"
          sectionHeader="Liquid template Projects"
        />

        <ProjectSlider
          projStack="Wordpress CMS"
          sectionHeader="Wordpress Projects"
        />
      </main>
    </div>
  );
};
