import React, { useState, createContext, useCallback } from "react";

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

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
