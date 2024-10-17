import React from "react";
import styles from "./styles/DonateNavbar.module.css"
import { GoArrowLeft } from "react-icons/go";
const DonateNavbar: React.FC = () => {
  return (
    <nav className={styles.donateNavbar}>
     <a href="/" className={styles.redirectButton}>
      <GoArrowLeft/> <span>Back to Home</span>
     </a> 
    <div></div>
    </nav>
  );
};

export default DonateNavbar;
