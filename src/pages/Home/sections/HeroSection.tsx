import React from "react";
import astronautImage from "../../../assets/astronaut.svg";
import styles from "../styles/HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <span
            className={`${styles.title} ${styles.gradientShadowText}`}
            data-text="Revolutionize Your Productivity"
          >
            Revolutionize Your <br /> Productivity
          </span>
          <span
            className={`${styles.subtitle} ${styles.gradientShadowText}`}
            data-text="Join us in redefining how we work with AI-driven efficiency"
          >
            Join us in redefining how we work with AI-driven efficiency
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            View PINAC Workspace
          </button>
          <button className={`${styles.button} ${styles.secondaryButton}`}>
            Visit GitHub
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={astronautImage}
          alt="Astronaut floating in space"
          className={styles.astronautImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
