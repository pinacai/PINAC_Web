import React, { useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../context/Firebase";
import Notification from "./components/Notification";
import styles from "./index.module.css";

// icons
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

interface NotificationState {
  message: string;
  type: "success" | "error";
  show: boolean;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const firebase = useContext(FirebaseContext);
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

  // check for redirect url
  const checkRedirectUrl = () => {
    const redirectUrl = searchParams.get("redirect");
    if (redirectUrl) {
      navigate(redirectUrl);
    } else {
      navigate("/pinac-workspace");
    }
  };

  //
  const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const result = await firebase?.signInWithEmail(email, password);
      if (typeof result === "string") {
        // Handle different Firebase error messages
        if (result.includes("user-not-found")) {
          showNotification("User not detected", "error");
        } else if (
          result.includes("wrong-password") ||
          result.includes("invalid-credential")
        ) {
          showNotification("Incorrect password", "error");
        } else {
          showNotification("Sorry, something went wrong", "error");
        }
      } else {
        showNotification("Logged in successfully", "success");
        setTimeout(() => checkRedirectUrl(), 1500);
      }
    } catch (error) {
      showNotification("Sorry, something went wrong", "error");
    }
  };

  //
  const handleGoogleSignIn = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      await firebase?.authenticateWithGoogle();
      showNotification("Logged in successfully", "success");
      setTimeout(() => checkRedirectUrl(), 1500);
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
          Don't have any account?{" "}
          <a href="/signup" className={styles.span}>
            SignUp
          </a>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
