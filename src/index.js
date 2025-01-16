import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CollegesProvider } from "./components3/collegeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CollegesProvider>
      <App />
    </CollegesProvider>
  </React.StrictMode>
);
