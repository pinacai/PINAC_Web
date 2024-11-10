import { Request, Response, NextFunction } from "express";
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { firebaseAdminConfig } from "./config";

// Initialize Firebase Admin once
initializeApp({
  credential: cert(firebaseAdminConfig),
});

// Extend Request type to include user
interface AuthRequest extends Request {
  user?: {
    uid: string;
    email?: string;
  };
}

// Authentication middleware
export const authenticateUser = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({
        status: "error",
        message: "Authorization token required",
      });
    }

    const token = authHeader.split("Bearer ")[1];

    // Verify the token
    const decodedToken = await getAuth().verifyIdToken(token);

    // Add user info to request
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
    };

    next();
  } catch (error) {
    console.error("Auth Error:", error);
    return res.status(401).json({
      status: "error",
      message: "Invalid or expired token",
    });
  }
};
