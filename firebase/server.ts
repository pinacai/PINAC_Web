// import {
//   cert,
//   getApps,
//   initializeApp,
//   ServiceAccount,
// } from "firebase-admin/app";
// import { Auth, getAuth } from "firebase-admin/auth";
// import serviceAccount from "../secret.json";

// // Initialize Firebase Admin
// let auth: Auth;

// try {
//   const currentApps = getApps();
//   if (currentApps.length <= 0) {
//     const app = initializeApp({
//       credential: cert(serviceAccount as ServiceAccount),
//     });
//     auth = getAuth(app);
//   } else {
//     auth = getAuth(currentApps[0]);
//   }
// } catch (error) {
//   console.error(error);
// }

// export { auth };
