import { useToggleAnimationContext } from '../contexts/ToggleAnimationContext';

import SVG from 'react-inlinesvg';

import rightIcon from '../assets/icons/white-right-icon.svg';
import downloadIcon from '../assets/icons/download-icon.svg';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { isOpen } = useToggleAnimationContext();
  return (
    <section className={`hero-section ${isOpen ? 'open' : ''}`}>
      <h3 className="hero-section__text">Hi there!</h3>
      <h1 className="hero-section__title">I’m Ayodeji Moses Odukoya</h1>
      <p className="hero-section__description">
        <span>Frontend Developer</span> <span className="spacer-dot" />
        <span>Visual Designer</span>
      </p>

      <h4 className="hero-section__mini-description">
        Welcome to my online space!
      </h4>

      <div className="hero-section__button-group">
        <Link to="/projects" className="button button--primary">
          See projects <SVG src={rightIcon} />
        </Link>
        <a
          href="../assets/AYO-MOSES-ODUKOYA.pdf"
          className="button button--secondary"
          download
        >
          Download CV
          <SVG src={downloadIcon} />
        </a>
      </div>
    </section>
  );
};
