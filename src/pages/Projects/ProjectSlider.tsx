import { MockData } from '../../mock/HomeProjects';

interface ProjectSliderProps {
  projStack: string;
}

export const ProjectSlider = ({ projStack }: ProjectSliderProps) => {
  const ProjData = MockData[0]?.projectsData || [];
  return ProjData.filter((data) => data.techStack.includes(projStack)).map(
    (project, index) => (
      <div key={index} className="projects__inner">
        <div>
          <div className="projects__tags-wrap">
            <div className="projects__tags">
              <ul className="projects__stack">
                {project.techStack.map((stack, index, array) => (
                  <li className="projects__stack-list" key={index}>
                    {stack}
                    {index < array.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <span>//</span>
              <p className="projects__category">{project.category}</p>
            </div>
            <h5 className="projects__project-name">{project.projectName}</h5>
            <p className="projects__description">{project.description}</p>
          </div>
        </div>

        <div className='projects__image-container'>
          <img
            src={project.mobileimageUrl}
            alt={project.projectName}
            className="featured__image featured__image-mobile"
          />
          <img
            src={project.desktopimageUrl}
            alt={project.projectName}
            className="featured__image featured__image-desktop"
          />
        </div>
      </div>
    )
  );
};
