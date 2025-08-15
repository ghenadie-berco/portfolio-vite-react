import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <CssBaseline>
    <StrictMode>
      <App />
    </StrictMode>
  </CssBaseline>
);
