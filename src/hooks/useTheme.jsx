import { useEffect } from "react";

export default function useTheme() {
  useEffect(() => {
    const saved = localStorage.getItem("garaad-theme");
    if (saved) {
      document.body.classList.add(saved);
    } else {
      document.body.classList.add("theme-light");
    }
  }, []);
}