import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Violations from './pages/Violations';
import PPEs from './pages/PPEs';
import Contractors from './pages/Contractors';
import Workers from './pages/Workers';
import MainLayout from './components/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'PPE_violations',
        element: <Violations />,
      },
      {
        path: 'PPEs',
        element: <PPEs />,
      },
      {
        path: 'contractors',
        element: <Contractors />,
      },
      {
        path: 'workers',
        element: <Workers />,
      },
    ],
  },

  { path: '*', element: <Navigate to="/" replace /> },
]);

export default router;
