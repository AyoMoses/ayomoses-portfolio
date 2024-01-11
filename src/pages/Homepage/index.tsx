import { AboutMeSection } from '../../components/AboutMe';
import { FeaturedProjects } from '../../components/FeaturedProjects';
import { HeroSection } from '../../components/HeroSection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <FeaturedProjects />
    </>
  );
};
