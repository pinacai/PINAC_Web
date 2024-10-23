// TokenPage.tsx
import React, { useState } from "react";
import styles from "./index.module.css";

// icon
import { MdOutlineContentCopy } from "react-icons/md";

interface TokenPageProps {
  token?: string;
}

const TokenPage: React.FC<TokenPageProps> = ({
  token = "AlzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Your ID Token:</h1>

        <div className={styles.tokenCard}>
          <div className={styles.tokenWrapper}>
            <span className={styles.tokenText}>{token}</span>
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
