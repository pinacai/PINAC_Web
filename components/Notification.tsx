"use client";
import { useEffect } from "react";
import styles from "./styles/Notification.module.css";

interface NotificationProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

const Notification = ({ message, type, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.notification} ${styles[`notification_${type}`]}`}>
      {message}
    </div>
  );
};

export default Notification;
