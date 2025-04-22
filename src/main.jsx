import React from "react";
import ReactDOM from "react-dom/client";  // ✅ Use createRoot for React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HelmetProvider>  {/* ✅ Wrap the entire app */}
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
