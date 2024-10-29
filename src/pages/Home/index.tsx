import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AppPreview from "./sections/AppPreview";
import FeatureSection from "./sections/FeatureSection";
import styles from "./index.module.css";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.setInMiddle}>
        <Navbar />
      </div>
      <div className={styles.sectionContainer}>
        <HeroSection />
        <div className={styles.restOfContent}>
          <AppPreview />
          <FeatureSection />
        </div>
      </div>
    </>
  );
};

export default Home;
