import { useState } from 'react';

import SVG from 'react-inlinesvg';

import linkedin from '../assets/icons/linkedin-colored.svg';
import twitter from '../assets/icons/twitterx.svg';
import dribbble from '../assets/icons/dribbble.svg';
import github from '../assets/icons/github-white.svg';
// import rightIcon from '../assets/icons/right-icon-black.svg';
import { Link } from 'react-router-dom';

export const AboutMeSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
    console.log('i have entered');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log('i have left');
  };
  return (
    <section className="about-me">
      <div
        className={`about-me__col-one ${isHovered ? 'pause-animation' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <h4 className="info mobile-info">
            click any part of your device to stop objects from moving
          </h4>
          <h4 className="info desktop-info">
            Hover on the icons to check me on socials!
          </h4>
        </div>

        <div className="about-me__icons-wrap">
          <div className="ball">
            <Link
              to="https://www.linkedin.com/in/ayodejiodukoya/"
              target="_blank"
            >
              <SVG src={linkedin} />
            </Link>
          </div>
          <div className="ballA">
            <Link to="https://twitter.com/ayodeji_odu" target="_blank">
              <SVG src={twitter} />
            </Link>
          </div>
          <div className="ballB">
            <Link to="https://twitter.com/ayodeji_odu" target="_blank">
              <SVG src={dribbble} />
            </Link>
          </div>
          <div className="ballC">
            <Link to="https://github.com/ayoMoses" target="_blank">
              <SVG src={github} />
            </Link>
          </div>
        </div>
      </div>

      <div className="about-me__col-two">
        <p className="bold p-one">
          I am a Frontend UI Developer and experience as a UI Designer. I am
          Passionate about creativity and creating dynamic user experience and
          user interface.
        </p>

        <p>
          My role is to empathize with developers while working on iteration
          with speed to hasten delivery, features that are feasible from the
          design end to implement in front-end. I bridge the design and
          front-end gap during product development and launch.
        </p>

        <p>
          My Tech Stack include: <b>HTML, CSS, SCSS, Bootstrap, Tailwind CSS,
          TypeScript, JavaScript, StorybookJS, ReactJS, NextJS, Angular,
          WordPress, Figma, AdobeXD, and Shopify. I also have experience working with SEO and
          Google Analytics</b> also, <b>Accessibility</b>.
        </p>

        {/* <Link to="/about-me" className="button button--slide">
          More about me
          <SVG src={rightIcon} />
        </Link> */}
      </div>
    </section>
  );
};
