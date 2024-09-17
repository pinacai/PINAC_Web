import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectSection from "./sections/ProjectSection";
import styles from "./index.module.css";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.setInMiddle}>
        <Navbar />
      </div>
      <div className={styles.sectionContainer}>
        <HeroSection />
        <div className={styles.particleFree}>
          <AboutSection />
          <ProjectSection />
        </div>
      </div>
    </>
  );
};

export default Home;
