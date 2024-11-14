import { getFirebaseAuth } from "next-firebase-auth-edge";

let firebaseAuth: ReturnType<typeof getFirebaseAuth> | null = null;

const getFirebaseAuthInstance = () => {
  if (!firebaseAuth) {
    firebaseAuth = getFirebaseAuth(
      {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
        privateKey: process.env.FIREBASE_PRIVATE_KEY || "",
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL || "",
      },
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY || ""
    );
  }
  return firebaseAuth;
};

const { verifyIdToken } = getFirebaseAuthInstance();

export const verifyRequest = async (token: string) => verifyIdToken(token);
