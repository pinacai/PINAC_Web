import {
  cert,
  getApps,
  initializeApp,
  ServiceAccount,
} from "firebase-admin/app";
import { Auth, getAuth } from "firebase-admin/auth";

// Initialize Firebase Admin
let auth: Auth;
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT;

try {
  const currentApps = getApps();
  if (serviceAccount && currentApps.length <= 0) {
    const app = initializeApp({
      credential: cert(JSON.parse(serviceAccount) as ServiceAccount),
    });
    auth = getAuth(app);
  } else {
    auth = getAuth(currentApps[0]);
  }
} catch (error) {
  console.error(error);
}

export { auth };
