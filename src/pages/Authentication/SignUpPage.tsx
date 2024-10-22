import React from "react";
import styles from "./SignUpPage.module.css";

// icons
import { RiContactsLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const SignUpPage: React.FC = () => {
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        {/*        Input Fields       */}
        {/* ========================= */}
        <div className={styles.flexColumn}>
          <label>Name </label>
        </div>
        <div className={styles.inputForm}>
          <RiContactsLine size={25} color="#ececec" />
          <input
            type="name"
            className={styles.input}
            placeholder="Enter your Name"
          />
        </div>
        <div className={styles.flexColumn}>
          <label>Email </label>
        </div>
        <div className={styles.inputForm}>
          <MdAlternateEmail size={25} color="#ececec" />
          <input
            type="emailid"
            className={styles.input}
            placeholder="Enter your Email"
          />
        </div>

        <div className={styles.flexColumn}>
          <label>Password </label>
        </div>
        <div className={styles.inputForm}>
          <IoLockClosedOutline size={25} color="#ececec" />
          <input
            type="password"
            className={styles.input}
            placeholder="Enter your Password"
          />
        </div>
        {/*        SignUp Button        */}
        {/* =========================== */}
        <button className={styles.buttonSubmit}>Sign Up</button>
        {/*          or Devider        */}
        {/* ========================== */}
        <div className={styles.devider}>
          <span></span>
          <span>or</span>
          <span></span>
        </div>
        {/*        Google SignUp Button       */}
        {/* ================================ */}
        <div className={styles.flexRow}>
          <button className={styles.googleBtn}>
            <FcGoogle size={25} />
            Continue with Google
          </button>
        </div>
        {/*        Login Page Link        */}
        {/* ============================= */}
        <p className={styles.p}>
          Already have a account? <span className={styles.span}>Login</span>
        </p>
      </form>
    </section>
  );
};

export default SignUpPage;
