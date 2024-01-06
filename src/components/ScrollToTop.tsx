import { useRef, useEffect } from 'react';

const ScrollToTopButton = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isVisible = window.scrollY > 10;
      console.log(isVisible ? 'Button is now visible' : 'Button is hidden');
      buttonRef.current?.classList.toggle('visible', isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    // Call initially to set visibility
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array to run only once during component mount

  return (
    <button
      ref={buttonRef}
      className="scroll-to-top-button"
      onClick={scrollToTop}
    >
      Scroll Back to Top
    </button>
  );
};

export default ScrollToTopButton;
