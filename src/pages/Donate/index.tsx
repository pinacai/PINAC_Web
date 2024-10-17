import React from "react";
// import HeroSection from "./sections/HeroSection";
// import AppPreview from "./sections/AppPreview";
// import FeatureSection from "./sections/FeatureSection";
import DonateSection from "./sections/DonateSection";

import styles from "./index.module.css";
import DonateNavbar from "../Home/components/DonateNavbar";

const Donate: React.FC = () => {
  return (
    <>
      <div>
          <DonateNavbar/ >
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
