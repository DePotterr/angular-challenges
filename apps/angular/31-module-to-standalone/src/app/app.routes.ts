import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./component/home/home.component'),
  },
  {
    path: 'admin',
    loadComponent: () => import('./component/admin/admin.component'),
  },
  {
    path: 'user',
    loadComponent: () => import('./component/user/user.component'),
  },
];
