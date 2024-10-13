import React from "react";
import styles from "./styles/FeatureSection.module.css";

// image

const FeatureSection: React.FC = () => {
  return (
    <section className={styles.featureSection}>
      <span className={styles.title}>
        Next-Gen features that <br /> makes it Worth It
      </span>
      <div className={styles.boxContainer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default FeatureSection;
