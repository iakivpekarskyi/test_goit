import Layout from './components/Layout';
import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));

export const App = () => {
  const router = createBrowserRouter(
    [
      {
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <HomePage />,
          },
          {
            path: '/catalog',
            element: <CatalogPage />,
          },
          {
            path: '/favorites',
            element: <FavoritesPage />,
          },
        ],
      },
    ],
    {
      basename: '/car-rent',
    }
  );

  return <RouterProvider router={router} />;
};
