import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart.routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductoCarritoComprasComponent } from './components/producto-carrito-compras/producto-carrito-compras.component';
import { CompradosHabitualmenteComponent } from './components/comprados-habitualmente/comprados-habitualmente.component';
import { ResumenCompraComponent } from '../../components/resumen-compra/resumen-compra.component';

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ProductoCarritoComprasComponent,
    CompradosHabitualmenteComponent,
    HeaderComponent,
    FooterComponent,
    ResumenCompraComponent,
  ]
})
export class CartModule { }
