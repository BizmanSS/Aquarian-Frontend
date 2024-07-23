import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { MobileProvider } from "./components/globalComponents/MobileContext/IsMobileContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MobileProvider>
      <App />
    </MobileProvider>
  </React.StrictMode>
);
