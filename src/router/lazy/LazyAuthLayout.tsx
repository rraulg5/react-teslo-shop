import { lazy } from 'react';

export const LazyAuthLayout = lazy(
  () => import('../../auth/layouts/AuthLayout'),
);
