import React, { createContext } from "react";
import { initializeApp } from "firebase/app";
import { UserCredential } from "@firebase/auth";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration details
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const FirebaseContext = createContext<{
    signUpWithEmailAndPassword: (email: string, password: string) => Promise<UserCredential>;
    signInUser: (email: string, password: string) => Promise<UserCredential>;
} | null>(null);

//
//
//
export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const signUpWithEmailAndPassword = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password).catch((error) => {
            return error.message;
        });
    }

    return (
        <FirebaseContext.Provider value={{ signUpWithEmailAndPassword, signInUser }}>
            {children}
        </FirebaseContext.Provider>
    );
};
