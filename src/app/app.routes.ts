import { CheckoutComponent } from './modules/checkout/components/datos-comprador/checkout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio-sesion',
    pathMatch: 'full',
},
{
  path: 'inicio-sesion',
  loadChildren: () => import('./modules/auteticacion/autenticacion.module').then((m) => m.AutenticacionModule),
  canActivate: []
},
{
  path: 'registro',
  loadChildren: () => import('./modules/registro-marca/registro-marca.module').then((m) => m.RegistroModule),
},
{
  path: 'home',
  loadChildren: () => import('./modules/home/home.module').then((m) => m.HomePrincipalModule),
  canActivate: []
  },
  {
    path:'tienda',
    loadChildren: () => import('./modules/tienda/tienda.module').then((m) => m.TiendaModule),
  },
  {
    path:'cart',
    loadChildren: () => import('./modules/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path:'checkout',
    loadChildren: () => import('./modules/checkout/terminar-compra.module').then((m) => m.TerminarCompraModule)
  }
];
