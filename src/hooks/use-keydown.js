import { useEffect } from "react";

export function useKeyDown(key, callback) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === key) {
        callback();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [key, callback]);
}

export const useEscapeKey = useKeyDown.bind(null, "Escape");
