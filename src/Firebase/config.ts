export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const firebaseAdminConfig = {
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  clientEmail: import.meta.env.VITE_FIREBASE_CLIENT_EMAIL,
  privateKey: import.meta.env.VITE_FIREBASE_PRIVATE_KEY,
};
