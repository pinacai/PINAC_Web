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
      <HeroSection />
      <div className={styles.sectionContainer}>
      </div>
    </>
  );
};

export default PinacWorkspace;
