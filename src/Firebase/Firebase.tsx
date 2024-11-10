import React, { createContext } from "react";
import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";
import { UserCredential } from "@firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// ===============================//
//      Types and Interfaces      //
// ===============================//

interface FirebaseContextType {
  signUpWithEmail: (
    name: string,
    email: string,
    password: string
  ) => Promise<UserCredential>;
  signInWithEmail: (
    email: string,
    password: string
  ) => Promise<UserCredential | string>;
  authenticateWithGoogle: () => Promise<UserCredential>;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider(); // Google Auth Provider

// Create Firebase Context with type safety
export const FirebaseContext = createContext<FirebaseContextType | null>(null);

// ============================================//
//      Authentication Helper Functions        //
// ============================================//

const signUpWithEmail = async (
  displayName: string,
  email: string,
  password: string
): Promise<UserCredential> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  await updateProfile(user, { displayName });
  return userCredential;
};

const signInWithEmail = async (
  email: string,
  password: string
): Promise<UserCredential | string> => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    return error.message;
  }
};

const authenticateWithGoogle = async (): Promise<UserCredential> => {
  const userCredential = await signInWithPopup(auth, googleAuthProvider);
  return userCredential;
};

// ===========================================//
//         Firebase Context Provider         //
// ==========================================//

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Context value with authentication methods
  const contextValue: FirebaseContextType = {
    signUpWithEmail,
    signInWithEmail,
    authenticateWithGoogle,
  };

  return (
    <FirebaseContext.Provider value={contextValue}>
      {children}
    </FirebaseContext.Provider>
  );
};
