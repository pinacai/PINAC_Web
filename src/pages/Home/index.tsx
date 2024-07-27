import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import styles from "./styles/index.module.css";

const Home: React.FC = () => {
  return (
    <>
      <div className={styles.setInMiddle}>
        <Navbar />
      </div>
      <div className={`${styles.setInMiddle} ${styles.heroSectionContainer}`}>
        <HeroSection />
      </div>
    </>
  );
};

export default Home;
