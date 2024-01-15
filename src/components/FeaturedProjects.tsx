import { useState } from 'react';
import { MockData } from '../mock/HomeProjects';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import rightIcon from '../assets/icons/white-right-icon.svg';

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

  const generateSrcset = (imagePath: string, sizes: number[]) => {
    return sizes
      .map((size) => {
        const replacedPath = imagePath.replace(':size', size.toString());
        return `${decodeURIComponent(replacedPath)} ${size}w`;
      })
      .join(', ');
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
                  sizes="
                        (max-width: 640px) 100vw,
                        (min-width: 641px) and (max-width: 1216px) 100vw,
                        (min-width: 1217px) and (max-width: 1648px) 100vw,
                        (min-width: 1649px) 100vw"
                  srcSet={generateSrcset(
                    project.imageUrl,
                    [640, 999, 1287, 1216, 1648, 1500, 1596, 1920] 
                  )}
                  src={generateSrcset(project.imageUrl, [1920]).split(' ')[0]}
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

            <Link
              to="/projects"
              className="button button--black button--black-desktop"
            >
              <span>view project</span>
            </Link>
            <Link
              to="/projects"
              className="button button--black button--black-mobile"
            >
              View project
              <SVG src={rightIcon} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
