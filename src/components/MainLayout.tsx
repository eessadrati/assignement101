import { Outlet } from 'react-router-dom';
import Header from './header';
import { useState } from 'react';
import SideBar from './SideBar';

const MainLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="flex w-full">
      <SideBar  />
      <div className="flex-1">
        <Header onOpenSideBar={setOpenSideBar}  openSideBar={openSideBar} />
        <main style={{ marginLeft: '200px' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
