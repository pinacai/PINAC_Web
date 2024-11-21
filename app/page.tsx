import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/home/HeroSection";
import AppPreview from "@/sections/home/AppPreview";
import FeatureSection from "@/sections/home/FeatureSection";
import "@/styles/globals.css";

const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <Navbar />
      </div>
      <main className="flex flex-col">
        <HeroSection />
        {/* z-index: 200; originally for below div */}
        <div className="flex flex-col items-center mt-[100vh] z-50">
          <AppPreview />
          <FeatureSection />
        </div>
      </main>
    </>
  );
};

export default Home;
export const runtime = "edge"; // 'nodejs' | 'edge'
