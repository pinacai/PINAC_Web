import React from "react";
import styles from "./styles/AboutSection.module.css";

// image
import planetImage from "../../../assets/img/planet.svg";

const AboutSection: React.FC = () => {
  const handleButtonClick = () => {
    window.open("https://github.com/pinacai");
  };

  return (
    <section className={styles.aboutSection}>
      {/*     Left Section     */}
      {/* ===================== */}
      <div className={styles.leftSection}>
        <span className={styles.title}>About Us</span>
        <div className={styles.textBlock}>
          <span className={styles.contentText}>
            We are a GitHub organization dedicated to developing AI-powered
            applications that make people's lives easier. At the core of our
            organization, we are driven by a deep understanding of the
            challenges people face in their daily lives and a commitment to
            leveraging AI to address those challenges.
          </span>
        </div>
        <button id={styles.applyButton} onClick={handleButtonClick}>
          Be a Part of Our Journey
        </button>
      </div>

      {/*     Right Section     */}
      {/* ==================== */}
      <div className={styles.rightSection}>
        <div className={styles.glowingCircleContainer}>
          <div className={styles.glowingCircle}></div>
        </div>
        <img
          src={planetImage}
          alt="Planet Image"
          className={styles.planetImage}
        />
      </div>
    </section>
  );
};

export default AboutSection;
