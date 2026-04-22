import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
    {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then(m => m.Register)
  },
  {
    path: '',
    loadComponent: () => import('./pages/layout/main-layout/main-layout').then(m => m.MainLayout),
    // canActivate: [authGuard], // Onde você colocaria sua proteção
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
