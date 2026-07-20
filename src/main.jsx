import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <App />
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
);
