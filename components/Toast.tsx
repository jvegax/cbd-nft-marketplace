import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { ErrorIcon, TickIcon } from "./Icon";

interface ToastProps {
  message: any;
  duration: number;
  type: string;
}

const Toast: React.FC<ToastProps> = ({ message, duration, type }) => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`${type == "error" ? styles.toastError : styles.toastSuccess} ${show ? styles.show : ""}`}>
      {type === "error" ? <ErrorIcon size={24} /> : <TickIcon size={24} />}
      <p>{message}</p>
    </div>
  );
};

export default Toast;
