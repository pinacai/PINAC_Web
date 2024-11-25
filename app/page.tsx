import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/home/HeroSection";
import AppPreview from "@/sections/home/AppPreview";
import FeatureSection from "@/sections/home/FeatureSection";

const Home = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <Navbar />
      </div>
      <main className="flex flex-col">
        <HeroSection />
        <div className="flex flex-col items-center 2xl-2:mt-[100vh] 2xl:mt-[20vh] xl:mt-[20vh] lg:mt-[15vh] sm:mt-[17vh] mt-[10vh] 2xl-2:z-50 relative">
          <AppPreview />
          <FeatureSection />
        </div>
      </main>
    </>
  );
};

export default Home;
export const runtime = "edge"; // 'nodejs' | 'edge'
