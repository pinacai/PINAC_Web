import React, { useContext } from "react";
import { FirebaseContext } from "../../context/Firebase";
import styles from "./index.module.css";

// icons
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const SignUpPage: React.FC = () => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //
  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    firebase?.signInWithEmail(email, password).catch((error) => {
      console.log(error);
    });
  };

  //
  const handleGoogleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
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
          <label>Email </label>
        </div>
        <div className={styles.inputForm}>
          <MdAlternateEmail size={25} color="#ececec" />
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/*        Login Button        */}
        {/* =========================== */}
        <button className={styles.buttonSubmit} onClick={handleSignIn}>
          Login
        </button>
        {/*          or Devider        */}
        {/* ========================== */}
        <div className={styles.devider}>
          <span></span>
          <span>or</span>
          <span></span>
        </div>
        {/*        Google login Button       */}
        {/* ================================ */}
        <div className={styles.flexRow}>
          <button className={styles.googleBtn} onClick={handleGoogleSignIn}>
            <FcGoogle size={25} />
            Sign In with Google
          </button>
        </div>
        {/*        SignUp Page Link        */}
        {/* ============================= */}
        <p className={styles.p}>
          Don't have any account? <span className={styles.span}>SignUp</span>
        </p>
      </form>
    </section>
  );
};

export default SignUpPage;
