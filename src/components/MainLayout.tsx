import { Outlet } from 'react-router-dom';
import Header from './header';
import { useState } from 'react';
import { TooltipProvider } from './ui/tooltip';
import SideBar from './sideBar';

const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex w-full h-full">
        <SideBar
          onIsCollapsedChange={setIsCollapsed}
          isCollapsed={isCollapsed}
        />
        <div className="flex-1">
          <Header
            onIsCollapsedChange={setIsCollapsed}
            isCollapsed={isCollapsed}
          />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default MainLayout;
