import React from "react";
import Navbar from "./components/Navbar";
import styles from "./index.module.css";

// icons
import { RiContactsLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { MdCurrencyRupee } from "react-icons/md";

const Donate: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className={styles.section}>
        <span className={styles.title}>Liked Our Projects ?</span>
        <span className={styles.contentText}>
          Your contributions help us continue to develop and maintain
          <br />
          open-source projects.
        </span>
        {/*            Form           */}
        {/* ========================= */}
        <form className={styles.form}>
          <div className={styles.flexColumn}>
            <label>Name </label>
          </div>
          <div className={styles.inputForm}>
            <RiContactsLine size={25} color="#ececec" />
            <input
              type="text"
              value={name}
              className={styles.input}
              placeholder="Tell us your Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.flexColumn}>
            <label>Email </label>
          </div>
          <div className={styles.inputForm}>
            <MdAlternateEmail size={25} color="#ececec" />
            <input
              type="email"
              value={email}
              className={styles.input}
              placeholder="Give your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className={styles.flexColumn}>
            <label>Donation Amount </label>
          </div>
          <div className={styles.inputForm}>
            <MdCurrencyRupee size={25} color="#ececec" />
            <input
              type="text"
              value={amount}
              className={styles.input}
              placeholder="Donation Amount"
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
          {/*        Donate Button        */}
          {/* =========================== */}
          <button type="submit" className={styles.donateButton}>
            Donate
          </button>
        </form>
      </section>
    </>
  );
};

export default Donate;
