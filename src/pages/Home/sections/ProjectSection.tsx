import React from "react";
import styles from "./styles/ProjectSection.module.css";

// image
import meteoroidShower from "../../../assets/img/Meteoroid Shower.svg";

const ProjectSection: React.FC = () => {
  const visitPinacWorkspace = () => {
    window.open("https://github.com/pinacai/PINAC_Workspace");
  };

  const visitNexusGPT = () => {
    window.open("https://github.com/pinacai/NexusGPT");
  };

  const visitPinacWeb = () => {
    window.open("https://github.com/pinacai/PINAC_Web");
  };

  return (
    <section className={styles.projectSection}>
      <div className={styles.meteoroidShower}>
        <img src={meteoroidShower} alt="" />
      </div>
      <div className={styles.cardContainer}>
        <span className={styles.title}>Our Projects</span>
        <div className={styles.cardGrid}>
          <div className={styles.projectCard} onClick={visitPinacWorkspace}>
            <span className={styles.cardTitle}>PINAC Workspace</span>
            <span className={styles.cardDescription}>
              A desktop app to address the widespread challenges in formulating
              effective prompts for AI, which often leads to suboptimal
              responses.
            </span>
          </div>
          <div className={styles.projectCard} onClick={visitNexusGPT}>
            <span className={styles.cardTitle}>PINAC NexusGPT</span>
            <span className={styles.cardDescription}>
              AI-powered tool for effortless, high-quality results from simple
              prompts. The CLI version of PINAC Workspace, made for quick
              access.
            </span>
          </div>
          <div className={styles.projectCard} onClick={visitPinacWeb}>
            <span className={styles.cardTitle}>PINAC-Web</span>
            <span className={styles.cardDescription}>
              Public repository of this official website of PINAC Organization.
              Contribute to this repository to make this website even better !
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
