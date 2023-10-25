import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import Sidebar from "./components/SideBar.jsx";

axios.defaults.baseURL = "http://localhost:5000/api/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Sidebar />
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
