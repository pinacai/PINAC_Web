import React, { useState, useEffect } from "react";
import styles from "./styles/HeroSection.module.css";

// image
import astronautImage from "../../../assets/astronaut.svg";
import orgGithubPage from "../../../assets/OrgGitHubPage.png";

const HeroSection: React.FC = () => {
  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);

  // Set a timeout for the subtitle to appear after the title's animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 1000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.upperSection}>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <span
              className={`${styles.title} ${styles.gradientShadowText}`}
              data-text="Revolutionize Your Productivity"
            >
              Revolutionize Your <br /> Productivity
            </span>
            {showSubtitle && (
              <span
                className={`${styles.subtitle} ${styles.gradientShadowText}`}
                data-text="Join us in redefining how we work with AI-driven efficiency"
              >
                Join us in redefining how we work with AI-driven efficiency
              </span>
            )}
          </div>
          {showSubtitle && (
            <div className={styles.buttonContainer}>
              <button className={styles.button} id={styles.primaryButton}>
                View PINAC Workspace
              </button>
              <button className={styles.button} id={styles.secondaryButton}>
                Visit GitHub
              </button>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <img
            src={astronautImage}
            alt="Astronaut floating in space"
            className={styles.astronautImage}
          />
        </div>
      </div>
      {/* Lower Section   
      {/* ==================== */}
      <div className={styles.lowerSection}>
        <div className={styles.glowingPage}>
          <div className={styles.glowingCircle} />
          <img src={orgGithubPage} alt="Organization's GitHub Page" />
        </div>
        <div className={styles.darkCircle} />
      </div>
    </section>
  );
};

export default HeroSection;
