import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseProvider } from "./context/Firebase.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);
