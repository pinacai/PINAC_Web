import Image from "next/image";
import styles from "./styles/HeroSection.module.css";

// image
import headerImg from "@/public/assets/img/Pinac Workspace Header Image.svg";
import planet from "@/public/assets/img/red-green planet.svg";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.header}>
        <span className={styles.title}>PINAC</span>
        <span className={styles.title} id={styles.secondTitleText}>
          Workspace
        </span>
        <Image alt="header design" src={headerImg} />
      </div>
      <Image alt="planet image" id={styles.planetImg} src={planet} />
    </section>
  );
};

export default HeroSection;
