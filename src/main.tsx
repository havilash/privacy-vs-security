import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "src/App";

import "./theme/variables.css";
import "./theme/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
