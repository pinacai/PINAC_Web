import React from "react";
import styles from "./styles/Navbar.module.css";
import logo from "../../../assets/img/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="PINAC Logo" className={styles.logo} />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="/donate">Donate</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
