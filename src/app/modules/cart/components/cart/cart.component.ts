
import { Component } from '@angular/core';
import { ProductoListadoCarritoCompras } from '../../models/producto-listado-carrito-compras';
import { LISTADO_PRODUCTOS_CARRITO_COMPRAS } from '../../../../../assets/constantes/objetos';
import { FooterComponent } from "../../../../components/footer/footer.component";
import { HeaderComponent } from "../../../../components/header/header.component";

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.sass',
  imports: [FooterComponent, HeaderComponent]
})
export class CartComponent {

  LISTADO_PRODUCTOS_CARRITO_COMPRAS = LISTADO_PRODUCTOS_CARRITO_COMPRAS;

  public listadoProductosCarritoCompras: ProductoListadoCarritoCompras[] = this.LISTADO_PRODUCTOS_CARRITO_COMPRAS;

}



