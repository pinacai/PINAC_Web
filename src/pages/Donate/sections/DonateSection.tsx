import React from "react";
import styles from "./styles/DonateSection.module.css";

// const [showSubtitle, setShowSubtitle] = useState<boolean>(false);

const DonateSection: React.FC = () => {
  return (
    <section className={styles.donateSection}>
      <span className={styles.title}>
        Liked our PINAC Web project?
      </span>
      <span className={styles.contentText}>
        Your contributions help us continue to develop and maintain this open-source project.
      </span>

      <form>
        <div className={styles.formGroup}>
          <label htmlFor="donation-amount">Donation Amount:</label>
          <input type="text" id="donation-amount" placeholder="Enter Donation Amount" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter Your Name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter Your Email" />
        </div>
        <button type="submit" className={styles.donateButton}>Donate</button>
      </form>
    </section>
  );
};

export default DonateSection;