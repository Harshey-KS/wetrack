import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="flex bg-[#E8F7FF] w-screen h-screen">
        <Sidebar />
        <div className="flex flex-col pt-0 w-full">
          {/* <div> */}
          <Header />
          {/* </div> */}
          <div className="w-full h-full p-2">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Layout;
