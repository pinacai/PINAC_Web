import React, { useContext } from "react";
import { FirebaseContext } from "../../context/Firebase";
import styles from "./index.module.css";

// icons
import { RiContactsLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const SignUpPage: React.FC = () => {
  const firebase = useContext(FirebaseContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //
  const handleSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    firebase?.signUpWithEmail(name, email, password).catch((error) => {
      console.log(error);
    });
  };

  //
  const handleGoogleSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    firebase?.authenticateWithGoogle();
  };

  // =========================================== //
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
            type="text"
            value={name}
            className={styles.input}
            placeholder="Enter your Name"
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
            placeholder="Enter your Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className={styles.flexColumn}>
          <label>Password </label>
        </div>
        <div className={styles.inputForm}>
          <IoLockClosedOutline size={25} color="#ececec" />
          <input
            type="password"
            value={password}
            className={styles.input}
            placeholder="Enter your Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {/*        SignUp Button        */}
        {/* =========================== */}
        <button className={styles.buttonSubmit} onClick={handleSignUp}>
          Sign Up
        </button>
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
          <button className={styles.googleBtn} onClick={handleGoogleSignUp}>
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
