import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicioClinica',
    loadChildren: () => import('./Usuario/usuarios.routes'),
  },
  // orden influye
  { path: '', redirectTo: 'inicioClinica', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicioClinica', pathMatch: 'full' },
];
