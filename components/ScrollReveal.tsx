"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Resetea el scroll al top cuando carga la página
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}