import { Component } from '@angular/core';
import { ProductoListadoCarritoCompras } from '../../models/producto-listado-carrito-compras';
import { LISTADO_PRODUCTOS_CARRITO_COMPRAS } from '../../../../../assets/constantes/objetos';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.sass'
})
export class CarritoComprasComponent {

  LISTADO_PRODUCTOS_CARRITO_COMPRAS = LISTADO_PRODUCTOS_CARRITO_COMPRAS;

  public listadoProductosCarritoCompras: ProductoListadoCarritoCompras[] = this.LISTADO_PRODUCTOS_CARRITO_COMPRAS;

}
