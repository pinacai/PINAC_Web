import React from "react";
import styles from "./styles/HeroSection.module.css";

// image
import headerImg from "../../../assets/img/Pinac Workspace Header Image.svg";
import planet from "../../../assets/img/red-green planet.svg";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.header}>
        <span className={styles.title}>PINAC</span>
        <span className={styles.title} id={styles.secondTitleText}>
          Workspace
        </span>
        <img src={headerImg} />
      </div>
      <img id={styles.planetImg} src={planet} />
    </section>
  );
};

export default HeroSection;
