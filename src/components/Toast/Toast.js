import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({
  variant = "notice",
  message,
  onDismiss,
  dismissMessage = "Dismiss",
}) {
  if (!ICONS_BY_VARIANT[variant]) {
    throw new Error(
      `unrecognized variant: ${variant}. (expected: ${Object.keys(
        ICONS_BY_VARIANT
      )})`
    );
  }

  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>{message}</p>
      <button className={styles.closeButton} onClick={onDismiss}>
        <X size={24} />
        <VisuallyHidden>{dismissMessage}</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
