import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/home/HeroSection";
import AppPreview from "@/sections/home/AppPreview";
import FeatureSection from "@/sections/home/FeatureSection";
import "@/styles/globals.css";

const Home = () => {
  return (
    <>
      <div className="setInMiddle">
        <Navbar />
      </div>
      <main className="sectionContainer">
        <HeroSection />
        <div className="restOfContent">
          <AppPreview />
          <FeatureSection />
        </div>
      </main>
    </>
  );
};

export default Home;
