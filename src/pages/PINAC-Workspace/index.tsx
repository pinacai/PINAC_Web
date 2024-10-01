import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import styles from "./index.module.css";

const PinacWorkspace: React.FC = () => {
  return (
    <>
      <div className={styles.setInMiddle}>
        <Navbar />
      </div>
      <div className={styles.sectionContainer}>
        <HeroSection />
      </div>
    </>
  );
};

export default PinacWorkspace;
