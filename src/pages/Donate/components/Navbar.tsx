import React from "react";
import styles from "./styles/Navbar.module.css";
import { GoArrowLeft } from "react-icons/go";
const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.redirectButton}>
        <GoArrowLeft />
        <span>Back to Home</span>
      </a>
      <div></div>
    </nav>
  );
};

export default Navbar;
