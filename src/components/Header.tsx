import React from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import logoColored from '../assets/icons/logo-colored.svg';
import logoWhite from '../assets/icons/logo-white.svg';
import menuIcon from '../assets/icons/hamburger.svg';
import twitter from '../assets/icons/twitter-white.svg';
import linkedin from '../assets/icons/linkedin-white.svg';
import github from '../assets/icons/github-white.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggleNav = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header className={`page-wrapper__nav ${isOpen ? 'open' : ''}`}>
      <div className="navTop-banner">
        <Link to="/" className="navTop-banner__logo">
          <SVG src={logoColored} />
        </Link>
        <button
          className="menu-toggle nav-button"
          role="banner"
          onClick={handleToggleNav}
        >
          <SVG src={menuIcon} />
        </button>
      </div>
      <nav role="banner">
        <div className="menu">
          <div className="banner__util">
            <SVG src={logoWhite} className="banner__util-logo" />
            <button
              className="banner__util-button banner__util-close"
              onClick={handleToggleNav}
            ></button>
          </div>

          <ul className="menu__container">
            <li data-animation="to-left">
              <Link to="/">
                Home
                <span className="outer" aria-hidden="true">
                  <span className="inner">Home</span>
                </span>
              </Link>
            </li>
            <li data-animation="to-bottom">
              <Link to="/projects">
                projects
                <span className="outer" aria-hidden="true">
                  <span className="inner">projects</span>
                </span>
              </Link>
            </li>
            <li data-animation="to-bottom">
              <Link to="/designs">
                designs
                <span className="outer" aria-hidden="true">
                  <span className="inner">designs</span>
                </span>
              </Link>
            </li>
            <li data-animation="to-top">
              <Link to="/about-me">
                about me
                <span className="outer" aria-hidden="true">
                  <span className="inner">about me</span>
                </span>
              </Link>
            </li>
            <li data-animation="to-left">
              <Link to="/contact-me">
                contact
                <span className="outer" aria-hidden="true">
                  <span className="inner">contact</span>
                </span>
              </Link>
            </li>

            <div className="menu__socials">
              <Link
                to="https://twitter.com/ayodeji_odu"
                target="_blank"
                className="menu__socials-link"
              >
                <SVG src={twitter} />
              </Link>

              <Link
                to="https://www.linkedin.com/in/ayodejiodukoya/"
                target="_blank"
                className="menu__socials-link"
              >
                <SVG src={linkedin} />
              </Link>
              <Link
                to="https://github.com/ayoMoses"
                target="_blank"
                className="menu__socials-link"
              >
                <SVG src={github} />
              </Link>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
