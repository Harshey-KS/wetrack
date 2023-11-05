import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Timeline from "./pages/Timeline";
import LeaveRecord from "./pages/LeaveRecord";
import Portion from "./pages/Portion";
import Profile from "./pages/Profile";
import Sidebar from "./components/SideBar";
import Layout from "./components/Layout";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const [count, setCount] = useState(0);
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaverecord" element={<LeaveRecord />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/portion" element={<Portion />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
