import React from "react";
import styles from "./styles/FeatureSection.module.css";

// image

const FeatureSection: React.FC = () => {
  return (
    <section className={styles.featureSection}>
      <span className={styles.title}>
        Next-Gen features that <br /> makes it Worth It
      </span>
    </section>
  );
};

export default FeatureSection;
