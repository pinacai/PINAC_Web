// TokenPage.tsx
import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../context/Firebase";
import TruncateText from "./components/TruncateText";
import styles from "./index.module.css";

// icon
import { MdOutlineContentCopy } from "react-icons/md";

const TokenPage: React.FC = () => {
  const [idToken, setIdToken] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(idToken);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        currentUser.getIdToken().then((token) => {
          setIdToken(token);
        });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Your ID Token:</h1>

        <div className={styles.tokenCard}>
          <div className={styles.tokenWrapper}>
            <TruncateText text={idToken} maxWidth="90%" />
            <button
              onClick={handleCopy}
              className={styles.copyButton}
              aria-label="Copy token"
            >
              <MdOutlineContentCopy
                size={13}
                color="white"
                className={styles.copyIcon}
              />
            </button>
          </div>
        </div>

        <p className={styles.instruction}>
          Copy and paste this token to the desktop app.
        </p>

        {copied && <div className={styles.tooltip}>Copied to clipboard!</div>}
      </div>
    </div>
  );
};

export default TokenPage;
