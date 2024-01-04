import React from 'react';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import logoColored from '../../assets/icons/logo-colored.svg';
import logoWhite from '../../assets/icons/logo-white.svg';
// import menuIcon from '../../assets/icons/hamburger.svg';
// import closeIcon from '../../assets/icons/close-menu.svg';
import twitter from '../../assets/icons/twitter-white.svg';
import linkedin from '../../assets/icons/linkedin-white.svg';
import github from '../../assets/icons/github-white.svg';

const Header: React.FC = () => {
  return (
    // <header>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/about-me">About Me</Link>
    //     <Link to="/projects">Projects</Link>
    //     <Link to="/designs">Designs</Link>
    //     <Link to="/contact-me">Contact Me</Link>
    //   </nav>
    // </header>

    <header className="page-wrapper__nav">
      <div className="navTop-banner">
        <Link to="/">
          <SVG src={logoColored} />
        </Link>
        <button className="menu-toggle nav-button" role="banner"></button>
      </div>
      <nav role="banner">
        <div className="menu">
          <div className="banner__util">
            <SVG src={logoWhite} />
            <button className="banner__util-button banner__util-close"></button>
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
          </ul>

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
        </div>
      </nav>
    </header>
  );
};

export default Header;
