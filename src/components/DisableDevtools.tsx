"use client";

import { useEffect } from "react";

export default function DisableDevtools() {
  useEffect(() => {
    const onContext = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", onContext);

    const ctrlShiftKey = (e: KeyboardEvent, keyChar: string) =>
      e.ctrlKey && e.shiftKey && e.keyCode === keyChar.charCodeAt(0);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 123) {
        e.preventDefault();
        return false;
      }
      if (
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C")
      ) {
        e.preventDefault();
        return false;
      }
      if (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null; 
}
