"use client";
import { useState, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UserCredential } from "@firebase/auth";
import { FirebaseContext } from "@/firebase/firebaseContext";
import Notification from "@/components/Notification";
import Link from "next/link";
import styles from "../auth.module.css";

// icons
import { MdAlternateEmail } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

interface NotificationState {
  message: string;
  type: "success" | "error";
  show: boolean;
}

const SignInPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState<NotificationState>({
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

  // handle auth flow for desktop App
  const handleAuthFlow = async (userCredential: UserCredential) => {
    const appAuth = searchParams.get("app-auth");
    if (appAuth === "true") {
      const idToken = await userCredential.user.getIdToken();
      const refreshToken = userCredential.user.refreshToken;
      const webApiKey = process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY;
      const userData = {
        idToken: idToken,
        refreshToken: refreshToken,
        webApiKey: webApiKey,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        photoURL: userCredential.user.photoURL,
      };
      const encodedData = encodeURIComponent(JSON.stringify(userData));
      window.location.href = `pinac-workspace://auth?data=${encodedData}`;
      router.push("/");
    } else {
      router.push("/");
    }
  };

  //
  const handleSignIn = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      if (firebase) {
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
          setTimeout(() => handleAuthFlow(result), 1500);
        }
      }
    } catch (error) {
      showNotification(`Sorry, an internal error occur: ${error}`, "error");
    }
  };

  //
  const handleGoogleSignIn = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      if (firebase) {
        const userCredential = await firebase.authenticateWithGoogle();
        showNotification("Logged in successfully", "success");
        setTimeout(() => handleAuthFlow(userCredential), 1500);
      }
    } catch (error) {
      showNotification(`Sorry, an internal error occur: ${error}`, "error");
    }
  };

  // =========================================== //
  return (
    <main>
      <section className={styles.container}>
        {notification.show && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() =>
              setNotification((prev) => ({ ...prev, show: false }))
            }
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
          {/*          or Divider        */}
          {/* ========================== */}
          <div className={styles.divider}>
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
            Dont have any account?{" "}
            <Link href="/auth/sign-up" className={styles.span}>
              SignUp
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignInPage;
export const runtime = "edge"; // 'nodejs' | 'edge'
