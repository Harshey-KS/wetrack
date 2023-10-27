import React from 'react';
import Sidebar from './SideBar';
import Header from './Header';

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <div className='flex bg-[#E8F7FF]'>
        <Sidebar />
        <div className="flex flex-col pt-0 w-screen h-screen">
        <div >
                <Header/>
            </div>
            <div className='w-full h-full'>
            {children}
            </div>
        </div>
        </div>
    </React.Fragment>
    );
};
export default Layout;