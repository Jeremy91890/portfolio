import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PizzaApp from "./PizzaApp";
import "./pizza.css";

const rootEl = document.getElementById("pizza-root");
if (rootEl) {
  createRoot(rootEl).render(
    <StrictMode>
      <PizzaApp />
    </StrictMode>,
  );
}

// Register service worker for PWA / offline support
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/pizza-sw.js").catch(() => {
      // SW registration failed — app still works online
    });
  });
}
