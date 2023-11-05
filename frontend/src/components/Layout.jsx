import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";
import { useAuthContext } from "../context/AuthContext";

const Layout = ({ children }) => {
  const { user } = useAuthContext();
  return (
    <React.Fragment>
      <div className="relative flex bg-[#E8F7FF] w-screen h-screen">
        {user && <Sidebar />}
        <div className="flex flex-col pt-0 w-full">
          {/* <div> */}
          <Header />
          {/* </div> */}
          <div className="p-2  w-full h-full overflow-auto">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
