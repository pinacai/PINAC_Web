import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../context/Firebase";
import Notification from "./components/Notification";
import styles from "./index.module.css";

// icons
import { RiContactsLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

interface NotificationState {
  message: string;
  type: "success" | "error";
  show: boolean;
}

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const firebase = useContext(FirebaseContext);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [notification, setNotification] = React.useState<NotificationState>({
    message: "",
    type: "success",
    show: false,
  });

  const showNotification = (message: string, type: "success" | "error") => {
    setNotification({
      message,
      type,
      show: true,
    });
  };

  //
  const handleSignUp = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await firebase?.signUpWithEmail(name, email, password);
      showNotification("Account created successfully!", "success");
      setTimeout(() => navigate("/pinac-workspace"), 1500);
    } catch (error: any) {
      // Handle specific Firebase error cases
      if (error.code === "auth/email-already-in-use") {
        showNotification("Email already exists", "error");
      } else if (error.code === "auth/invalid-email") {
        showNotification("Invalid email format", "error");
      } else if (error.code === "auth/weak-password") {
        showNotification("Password should be at least 6 characters", "error");
      } else {
        showNotification("Sorry, something went wrong", "error");
      }
    }
  };

  //
  const handleGoogleSignUp = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      await firebase?.authenticateWithGoogle();
      showNotification("Account created successfully!", "success");
      setTimeout(() => navigate("/pinac-workspace"), 1500);
    } catch (error) {
      showNotification("Sorry, something went wrong", "error");
    }
  };

  // =========================================== //
  return (
    <section className={styles.container}>
      {notification.show && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification((prev) => ({ ...prev, show: false }))}
        />
      )}
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
          Already have a account?{" "}
          <a href="/login" className={styles.span}>
            Login
          </a>
        </p>
      </form>
    </section>
  );
};

export default SignUpPage;
