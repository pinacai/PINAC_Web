import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./styles/AppPreview.module.css";

// image
import appImage from "../../../assets/img/App Image.svg";

const AppPreview: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`${inView ? styles.imageVisible : styles.imageHidden}`}
    >
      <img src={appImage} id={styles.appImage} />
    </div>
  );
};

export default AppPreview;
