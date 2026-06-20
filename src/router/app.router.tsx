import { createBrowserRouter, Navigate } from 'react-router';

import { LazyAdminLayout } from './lazy/LazyAdminLayout';
import { LazyAuthLayout } from './lazy/LazyAuthLayout';
import { ShopLayout } from '../shop/layouts/ShopLayout';

import { AdminDashboardPage } from '../admin/pages/dashboard/AdminDashboardPage';
import { AdminProductPage } from '../admin/pages/product/AdminProductPage';
import { AdminProductsPage } from '../admin/pages/products/AdminProductsPage';
import { GenderPage } from '../shop/pages/gender/GenderPage';
import { HomePage } from '../shop/pages/home/HomePage';
import { LoginPage } from '../auth/pages/login/LoginPage';
import { ProductPage } from '../shop/pages/product/ProductPage';
import { RegisterPage } from '../auth/pages/register/RegisterPage';

export const appRouter = createBrowserRouter([
  // Main Routes
  {
    path: '/',
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'product/:idSlug',
        element: <ProductPage />,
      },
      {
        path: 'gender/:gender',
        element: <GenderPage />,
      },
    ],
  },

  // Auth Routes
  {
    path: '/auth',
    element: <LazyAuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/auth/login' />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },

  // Admin Routes
  {
    path: '/admin',
    element: <LazyAdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboardPage />,
      },
      {
        path: 'products',
        element: <AdminProductsPage />,
      },
      {
        path: 'product/:id',
        element: <AdminProductPage />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to='/' />,
  },
]);
