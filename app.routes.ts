import { Routes } from '@angular/router';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio-sesion',
        pathMatch: 'full',
    },
    {
        path: 'pagina-no-encontrada',
        component: PaginaNoEncontradaComponent
    },
    {
        path: 'inicio-sesion',
        loadChildren: () => import('./modules/autenticacion/autenticacion.module').then((m) => m.AutenticacionModule),
        canActivate: []
    },
    {
        path: 'registro',
        loadChildren: () => import('./modules/registro/registro.module').then((m) => m.RegistroModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/pagina-principal/pagina-principal.module').then((m) => m.PaginaPrincipalModule),
        canActivate: []
    },
    {
        path: 'busqueda',
        loadChildren: () => import('./modules/busqueda/busqueda.module').then((m) => m.BusquedaModule),
        canActivate: []
    },
    {
        path: 'carrito-compras',
        loadChildren: () => import('./modules/carrito-compras/carrito-compras.module').then((m) => m.CarritoComprasModule),
        canActivate: []
    },
    {
        path: 'terminar-compra',
        loadChildren: () => import('./modules/terminar-compra/terminar-compra.module').then((m) => m.TerminarCompraModule),
        canActivate: []
    },
    {
        path: '**',
        component: PaginaNoEncontradaComponent
    },
];
