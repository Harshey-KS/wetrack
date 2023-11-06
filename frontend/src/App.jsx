import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Timeline from "./pages/Timeline";
import LeaveRecord from "./pages/LeaveRecord";
import Portion from "./pages/Portion";
import Profile from "./pages/Profile";
import Sidebar from "./components/SideBar";
import Layout from "./components/Layout";
import { useAuthContext } from "./context/AuthContext";
import Department from "./pages/Department";
import Teacher from "./pages/Teacher";
import LeaveRecordHod from "./pages/LeaveRecordHod";

function App() {
  const [count, setCount] = useState(0);
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/leaverecord"
            element={
              user?.type === "Teacher" ? <LeaveRecord /> : <LeaveRecordHod />
            }
          />
          {/* <Route path="/leaverecordhod" element={<LeaveRecordHod />} /> */}
          <Route path="/portion" element={<Portion />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/portion/department" element={<Department />} />
          <Route path="/portion/department/teacher" element={<Teacher />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
