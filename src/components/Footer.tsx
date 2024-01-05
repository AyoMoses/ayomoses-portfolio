import SVG from 'react-inlinesvg';

import logoWhite from '../assets/icons/logo-white.svg';
import twitter from '../assets/icons/twitter-white.svg';
import linkedin from '../assets/icons/linkedin-white.svg';
import github from '../assets/icons/github-white.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <SVG src={logoWhite} />
      <h4 className="site-footer__title">Want to connect with me?</h4>
      <p className="site-footer__text">Reach me below!</p>

      <div className="site-footer__social">
        <Link
          to="https://twitter.com/ayodeji_odu"
          target="_blank"
          className="site-footer__social-link"
        >
          <SVG src={twitter} />
        </Link>

        <Link
          to="https://www.linkedin.com/in/ayodejiodukoya/"
          target="_blank"
          className="site-footer__social-link"
        >
          <SVG src={linkedin} />
        </Link>
        <Link
          to="https://github.com/ayoMoses"
          target="_blank"
          className="site-footer__social-link"
        >
          <SVG src={github} />
        </Link>
      </div>
    </footer>
  );
};
