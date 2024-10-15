import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import styles from "./index.module.css";

// icons
import { LuWaves } from "react-icons/lu";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.setInMiddle}>
        <Navbar />
      </div>
      <div className={styles.sectionContainer}>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <div className={styles.footer}>
          <LuWaves size={30} color="white" />
        </div>
      </div>
    </>
  );
};

export default Home;
