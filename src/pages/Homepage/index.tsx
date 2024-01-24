import { AboutMeSection } from '../../components/AboutMe';
import { FeaturedProjects } from '../../components/FeaturedProjects';
import { HeroSection } from '../../components/HeroSection';
import { TestimonialsSection } from '../../components/TestimonialsSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <FeaturedProjects />
      <TestimonialsSection />
    </>
  );
};
