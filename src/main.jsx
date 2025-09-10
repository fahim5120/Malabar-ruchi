import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import './index.css'; 


import App from "./App.jsx";
import StoreContextProvider from "./components/StoreContext.jsx";
import { DarkModeProvider } from "./components/DarkModeContext.jsx";




createRoot(document.getElementById("root")).render(
  <StrictMode>

    <StoreContextProvider>
      <App />
    </StoreContextProvider>

    
  </StrictMode>
);
