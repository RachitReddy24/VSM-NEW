import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import { SidebarProvider } from "./context/SidebarContext";
import { MeetingProvider } from "./context/MeetingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <MeetingProvider>
          <App />
        </MeetingProvider>
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
);