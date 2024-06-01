/* eslint-disable react-refresh/only-export-components */
import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/components/MainLayout';
import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const Violations = lazy(() => import('@/pages/Violations'));
const PPEs = lazy(() => import('@/pages/PPEs'));
const Contractors = lazy(() => import('@/pages/Contractors'));
const Workers = lazy(() => import('@/pages/Workers'));

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
