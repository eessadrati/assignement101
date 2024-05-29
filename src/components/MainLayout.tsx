import { Sidebar } from 'lucide-react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ marginLeft: '200px' }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;
