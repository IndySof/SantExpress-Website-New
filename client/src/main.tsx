import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeI18n } from "./lib/i18n";

// Initialize translations before rendering the app
initializeI18n().then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
