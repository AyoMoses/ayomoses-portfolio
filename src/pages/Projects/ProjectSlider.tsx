import React from 'react';
import { MockData } from '../../mock/HomeProjects';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';

import rightIcon from '../../assets/icons/white-right-icon.svg';

import ReactSlick from 'react-slick';

import type { Settings } from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

interface ProjectSliderProps {
  projStack: string;
  sectionHeader: string;
}

const settings: Settings = {
  //   autoplay: true,
  dots: true,
  speed: 500,
  arrows: false,
  draggable: false,
  swipe: false,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 768, // max-width
      settings: {
        infinite: true,
      },
    },
  ],
};

export const ProjectSlider: React.FC<ProjectSliderProps> = ({
  projStack,
  sectionHeader,
}) => {
  const ProjData = MockData[0]?.projectsData || [];

  const filteredProjects = ProjData.filter((data) =>
    data.techStack.includes(projStack)
  );

  return (
    <section className="projects__section">
      <h2 className="projects__section-header">{sectionHeader}</h2>

      <ReactSlick {...settings}>
        {filteredProjects.map((project, index) => (
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
                <h5 className="projects__project-name">
                  {project.projectName}
                </h5>
                <p className="projects__description">{project.description}</p>

                {/* <Link
                to={`${project.projectUrl}`}
                target="_blank"
                className="button button--black button--black-desktop"
              >
                <span>view project</span>
              </Link> */}
                <Link
                  to={`${project.projectUrl}`}
                  target="_blank"
                  className="button button--black button--black-mobile"
                >
                  View project
                  <SVG src={rightIcon} />
                </Link>
              </div>
            </div>

            <div className="projects__image-container">
              {project.mobileimageUrl && (
                <img
                  src={project.mobileimageUrl}
                  alt={project.projectName}
                  className="featured__image featured__image-mobile"
                />
              )}
              {project.desktopimageUrl && (
                <img
                  src={project.desktopimageUrl}
                  alt={project.projectName}
                  className="featured__image featured__image-desktop"
                />
              )}
            </div>
          </div>
        ))}
      </ReactSlick>
    </section>
  );
};
