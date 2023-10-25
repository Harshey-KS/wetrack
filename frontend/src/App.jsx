import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Timeline from "./pages/Timeline";
import LeaveRecord from "./pages/LeaveRecord";
import Portion from "./pages/Portion";
import Profile from "./pages/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaverecord" element={<LeaveRecord />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/portion" element={<Portion />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
