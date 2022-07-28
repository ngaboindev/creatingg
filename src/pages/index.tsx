import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import HomeCallToAction from '@/components/HomeCallToAction';
import HomeHeroSection from '@/components/HomeHeroSection';
import HomeNav from '@/components/HomeNav';
import { Meta } from '@/layouts/Meta';

const Home = () => {
  return (
    <>
      <Meta
        title="Creatingg"
        description="Showcase your portfolio with a website built in minutes."
      />
      <HomeNav />
      <HomeHeroSection />
      <FeaturesSection />
      <HomeCallToAction />
      <Footer />
    </>
  );
};

export default Home;
