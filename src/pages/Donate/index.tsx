import React from "react";
import Navbar from "../Home/components/Navbar";
// import HeroSection from "./sections/HeroSection";
// import AppPreview from "./sections/AppPreview";
// import FeatureSection from "./sections/FeatureSection";
import DonateSection from "./sections/DonateSection";
import styles from "./index.module.css";

const Donate: React.FC = () => {
  return (
    <>
      <div className={styles.setInMiddle}>
        <Navbar />
      </div>
      <div className={styles.sectionContainer}>
        <DonateSection />
        {/* <div className={styles.restOfContent}>
          <AppPreview />
          <FeatureSection />
        </div> */}
      </div>
    </>
  );
};

export default Donate;
