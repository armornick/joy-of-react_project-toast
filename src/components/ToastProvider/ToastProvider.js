import React, { useState, createContext, useCallback } from "react";
import { useEscapeKey } from "../../hooks/use-keydown";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(
    ({ variant, message }) => {
      const newToast = {
        id: `${Date.now()}~${Math.random()}`,
        variant,
        message,
      };
      setToasts([...toasts, newToast]);
    },
    [toasts]
  );

  const removeToast = useCallback(
    (toastId) => {
      setToasts(toasts.filter((toast) => toast.id !== toastId));
    },
    [toasts]
  );

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(() => {
    removeAllToasts();
  });

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, removeAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
