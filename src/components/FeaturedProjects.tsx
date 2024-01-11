import { useState } from 'react';
import { MockData } from '../mock/HomeProjects';

// interface Project {
//   imageUrl: string;
//   videoUrl: string;
//   techStack: string[];
//   category: string;
//   projectName: string;
//   description: string;
//   projectUrl: string;
// }

export const FeaturedProjects = () => {
  const [hover, setHover] = useState(false);
  const featuredData = MockData[0]?.featuredData || [];

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="featured">
      <h2 className="featured__header">Selected projects</h2>
      {featuredData.map((project, index) => (
        <div
          key={index}
          className="featured__section"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hover && project.videoUrl.length > 1 ? (
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

          <h5 className="featured__project-name">{project.projectName}</h5>
          <div className="featured__tags">
            <ul className="featured__stack">
              <li className="featured__stack-list">{project.techStack}</li>
            </ul>
            <p className="featured__category">{project.category}</p>
          </div>
          <p className="featured__description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};
