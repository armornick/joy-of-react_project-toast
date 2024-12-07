import React, { useState, createContext, useCallback, useEffect } from "react";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ variant, message }) => {
    const newToast = {
      id: `${Date.now()}~${Math.random()}`,
      variant,
      message,
    };
    setToasts([...toasts, newToast]);
  });

  const removeToast = useCallback((toastId) => {
    setToasts(toasts.filter((toast) => toast.id !== toastId));
  });

  const removeAllToasts = useCallback(() => {
    setToasts([]);
  });

  useEffect(() => {
    const onKeyUp = (/** @type {KeyboardEvent} */ e) => {
      if (e.code === "Escape") {
        removeAllToasts();
      }
    };

    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, removeAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
