import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio-sesion',
    pathMatch: 'full',
},
{
  path: 'inicio-sesion',
  loadChildren: () => import('./modules/auteticacion/Autenticacion.module').then((m) => m.AutenticacionModule),
  canActivate: []
},
{
  path: 'registro',
  loadChildren: () => import('./modules/registro-marca/registro-marca.module').then((m) => m.RegistroModule),
},
{
  path: 'home',
  loadChildren: () => import('./modules/home/home.component').then((m) => m.HomeComponent),
  canActivate: []
  },
];
