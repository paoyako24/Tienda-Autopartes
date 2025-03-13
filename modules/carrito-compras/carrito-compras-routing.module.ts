import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';

const routes: Routes = [
  {
    path: '',
    component: CarritoComprasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoComprasRoutingModule { }
