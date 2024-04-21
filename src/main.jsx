import React from "react";
import ReactDOM from "react-dom/client";
import DrumMachine from "./DrumMachine.jsx";
import "./index.css";
import { keyData } from "./components/data/data.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DrumMachine data={keyData} />
  </React.StrictMode>
);
