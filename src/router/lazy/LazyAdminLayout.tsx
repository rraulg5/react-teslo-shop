import { lazy } from 'react';

export const LazyAdminLayout = lazy(
  () => import('../../admin/layouts/AdminLayout'),
);
