import ReactSlick from 'react-slick';

import type { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import userIcon from '../assets/icons/user-icon.svg';
import brookImg from '/brook.jpeg';
import jacobImg from '/jacob.png'; 

const settings: Settings = {
  autoplay: true,
  dots: true,
  speed: 500,
  arrows: false,
  draggable: false,
  swipe: false,
  pauseOnHover: true,
  slidesToShow: 2,

  responsive: [
    {
      breakpoint: 768, // max-width
      settings: {
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

export const TestimonialsSection = () => {
  return (
    <section className="comment">
      <h2 className="comment__header">Client comment</h2>

      <ReactSlick {...settings}>
        <div>
          <div className="comment__card">
            <div className="comment__image-wrap">
              <img
                src={jacobImg}
                alt="Jacob Savage"
                className="comment__image"
              />
            </div>

            <h5 className="comment__title">Jacob Savage</h5>
            <h6 className="comment__sub-title">
              CEO, Speak Creative (TN, USA)
            </h6>

            <div className="comment__description-wrap">
              <p className="comment__description">
                Ayo worked for me for over two years. He worked as a front-end
                developer, building and maintaining websites. Ayo is a talented
                and friendly individual and would be an asset to any company in
                need of his skills.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="comment__card">
            <div className="comment__image-wrap">
              <img
                src={brookImg}
                alt="brook borup"
                className="comment__image"
              />
            </div>

            <h5 className="comment__title">Brook Borup</h5>
            <h6 className="comment__sub-title">
              Director, MyCloneSolutions(Tampa, USA)
            </h6>

            <div className="comment__description-wrap">
              <p className="comment__description">
                To take a role that his not his own as a back-end developer,
                solving problems that is not his is why i love working with him.
                He’d go extra miles to look for solutions just to deliver. He is
                just an amazing individual.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="comment__card">
            <div className="comment__image-wrap comment__icon">
              <img
                src={userIcon}
                alt="Adeyemo Samuel"
                className="comment__image"
              />
            </div>

            <h5 className="comment__title">Adeyemo Samuel</h5>
            <h6 className="comment__sub-title">Director, Slitech (LAG, NG)</h6>

            <div className="comment__description-wrap">
              <p className="comment__description">
                Known Ayo for over 5 years and watched him grow. He has worked
                as the Lead UI Engineer on 5 major enterprise projects I have
                contracted to him. The way he interpretes every bit of design to
                code to the tiniest detail is amazing.
              </p>
            </div>
          </div>
        </div>
      </ReactSlick>
    </section>
  );
};
