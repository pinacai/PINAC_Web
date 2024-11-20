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
      process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY || ""
    );
  }
  return firebaseAuth;
};

const { verifyIdToken } = getFirebaseAuthInstance();

export const verifyRequest = async (token: string) => verifyIdToken(token);

//
// Firebase Auth error codes: https://next-firebase-auth-edge-docs.vercel.app/docs/errors
interface AuthError {
  code: string;
  message: string;
  status: number;
}

export const handleAuthError = (error: {
  code: string;
  message: string;
}): AuthError => {
  const errorCode = error.code || error.message;

  switch (errorCode) {
    case "TOKEN_EXPIRED":
      return {
        code: "TOKEN_EXPIRED",
        message: "Token has expired. Please refresh your token",
        status: 401,
      };
    case "TOKEN_REVOKED":
      return {
        code: "TOKEN_REVOKED",
        message: "Token has been revoked. Please reauthenticate",
        status: 401,
      };
    case "INVALID_ARGUMENT":
      return {
        code: "INVALID_TOKEN_FORMAT",
        message: "Invalid token format",
        status: 400,
      };
    case "INVALID_CREDENTIAL":
    case "INVALID_SIGNATURE":
    case "MISMATCHING_TENANT_ID":
    case "NO_KID_IN_HEADER":
      return {
        code: "INVALID_TOKEN",
        message: "Invalid token provided",
        status: 401,
      };
    case "USER_DISABLED":
      return {
        code: "USER_DISABLED",
        message: "User account has been disabled",
        status: 403,
      };
    case "USER_NOT_FOUND":
      return {
        code: "USER_NOT_FOUND",
        message: "User not found",
        status: 404,
      };
    default:
      return {
        code: "AUTH_ERROR",
        message: error.message || "Authentication failed",
        status: 500,
      };
  }
};
