import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import './components/App.css';


createRoot(document.getElementById("root")).render(<App />);
