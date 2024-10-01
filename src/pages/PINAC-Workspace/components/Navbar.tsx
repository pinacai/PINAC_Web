import React from "react";
import styles from "./styles/Navbar.module.css";
import logo from "../../../assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="PINAC Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#download">Download</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#docs">Docs</a>
        </li>
        <li>
          <button id={styles.githubButton}>Stars on GutHub</button>
        </li>
        <li>
          <button id={styles.signinButton}>Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
