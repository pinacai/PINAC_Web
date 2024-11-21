"use client";
import { useState, useContext } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { UserCredential } from "@firebase/auth";
import { FirebaseContext } from "@/firebase/firebaseContext";
import Notification from "@/components/Notification";

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

const SignUpPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const firebase = useContext(FirebaseContext);
  const [name, setName] = useState("");
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

  //
  const handleLoginClick = () => {
    const appAuth = searchParams.get("app-auth");
    if (appAuth === "true") {
      router.push("/auth/sign-in/?app-auth=true");
    } else {
      router.push("/auth/sign-in");
    }
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
  const handleSignUp = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      if (firebase) {
        const userCredential = await firebase.signUpWithEmail(
          name,
          email,
          password
        );
        showNotification("Account created successfully!", "success");
        setTimeout(() => handleAuthFlow(userCredential), 1500);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      if (firebase) {
        const userCredential = await firebase.authenticateWithGoogle();
        showNotification("Account created successfully!", "success");
        setTimeout(() => handleAuthFlow(userCredential), 1500);
      }
    } catch (error) {
      showNotification(`Sorry, an internal error occur: ${error}`, "error");
    }
  };

  // =========================================== //
  return (
    <main>
      <section className="h-lvh flex justify-center items-center bg-primary">
        {notification.show && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() =>
              setNotification((prev) => ({ ...prev, show: false }))
            }
          />
        )}
        <form className="flex flex-col p-8 w-[400px] rounded-2xl bg-form shadow-glass">
          {/*        Input Fields       */}
          {/* ========================= */}
          <div className="mx-0.5 my-4 font-Poppins font-medium text-base text-light">
            <label>Name </label>
          </div>
          <div className="h-12 pl-2.5 rounded-lg flex items-center shadow-glass focus-within:shadow-none focus-within:border-1.5 focus-within:border-highlight">
            <RiContactsLine size={25} color="#ececec" />
            <input
              type="text"
              value={name}
              className="h-full w-10/12 ml-2.5 rounded-lg text-light bg-form"
              placeholder="Enter your Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mx-0.5 my-4 font-Poppins font-medium text-base text-light">
            <label>Email </label>
          </div>
          <div className="h-12 pl-2.5 rounded-lg flex items-center shadow-glass focus-within:shadow-none focus-within:border-1.5 focus-within:border-highlight">
            <MdAlternateEmail size={25} color="#ececec" />
            <input
              type="email"
              value={email}
              className="h-full w-10/12 ml-2.5 rounded-lg text-light bg-form"
              placeholder="Enter your Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="mx-0.5 my-4 font-Poppins font-medium text-base text-light">
            <label>Password </label>
          </div>
          <div className="h-12 pl-2.5 rounded-lg flex items-center shadow-glass focus-within:shadow-none focus-within:border-1.5 focus-within:border-highlight">
            <IoLockClosedOutline size={25} color="#ececec" />
            <input
              type="password"
              value={password}
              className="h-full w-10/12 ml-2.5 rounded-lg text-light bg-form"
              placeholder="Enter your Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          {/*        SignUp Button        */}
          {/* =========================== */}
          <button
            className="h-12 w-full mt-5 mb-2.5 rounded-lg font-medium text-base text-light bg-LoginButton cursor-pointer hover:bg-LoginButtonHover"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          {/*          or Divider        */}
          {/* ========================== */}
          <div className="flex justify-between items-center text-base text-light gap-x-2.5">
            <span className="block h-px w-full bg-[#dbdbdb]"></span>
            <span>or</span>
            <span className="block h-px w-full bg-[#dbdbdb]"></span>
          </div>
          {/*        Google SignUp Button       */}
          {/* ================================ */}
          <div className="flex items-center justify-between gap-2.5">
            <button
              className="h-12 w-full mt-2.5 flex items-center justify-center rounded-lg font-medium gap-2.5 bg-light cursor-pointer"
              onClick={handleGoogleSignUp}
            >
              <FcGoogle size={25} />
              Sign In with Google
            </button>
          </div>
          {/*        Login Page Link        */}
          {/* ============================= */}
          <p className="my-1 text-center text-sm text-light">
            Already have a account?{" "}
            <span
              className="ml-1 no-underline text-blue-500 text-sm font-medium cursor-pointer"
              onClick={handleLoginClick}
            >
              Login
            </span>
          </p>
        </form>
      </section>
    </main>
  );
};

export default SignUpPage;
export const runtime = "edge"; // 'nodejs' | 'edge'
