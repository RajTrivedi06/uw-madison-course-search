// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import your CSS properly
import "./styles/index.css";

// If you want Radix UI’s global styles (optional)
import "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
