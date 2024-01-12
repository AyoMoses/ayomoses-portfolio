import { useState } from 'react';
import { MockData } from '../mock/HomeProjects';

interface HoverState {
  [key: number]: boolean;
}

export const FeaturedProjects = () => {
  const [hover, setHover] = useState<HoverState>({});
  const featuredData = MockData[0]?.featuredData || [];

  const handleMouseEnter = (index: number) => {
    setHover((prev) => ({ ...prev, [index]: true }));
  };
  const handleMouseLeave = (index: number) => {
    setHover((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <div className="featured">
      <h2 className="featured__header">Selected projects</h2>
      {featuredData.map((project, index) => (
        <div
          key={index}
          className="featured__section"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="featured__section-inner">
            <div
              className={`featured__media-wrap ${
                hover[index] && project.videoUrl ? 'show-video' : 'hide-video'
              }`}
            >
              {hover[index] && project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  autoPlay
                  muted
                  loop
                  className="featured__video"
                />
              ) : (
                <img
                  src={project.imageUrl}
                  alt={project.projectName}
                  className="featured__image"
                />
              )}
            </div>

            <div className="featured__tags-wrap">
              <div className="featured__tags">
                <ul className="featured__stack">
                  {project.techStack.map((stack, index, array) => (
                    <li className="featured__stack-list" key={index}>
                      {stack}
                      {index < array.length - 1 && ','}
                    </li>
                  ))}
                </ul>
                <span>//</span>
                <p className="featured__category">{project.category}</p>
              </div>
              <h5 className="featured__project-name">{project.projectName}</h5>
            </div>
            <p className="featured__description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
