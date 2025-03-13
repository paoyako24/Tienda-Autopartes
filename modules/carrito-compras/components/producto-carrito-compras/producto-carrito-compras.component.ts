import { Component, Input } from '@angular/core';
import { ProductoListadoCarritoCompras } from '../../models/producto-listado-carrito-compras';

@Component({
  selector: 'app-producto-carrito-compras',
  standalone: true,
  imports: [],
  templateUrl: './producto-carrito-compras.component.html',
  styleUrl: './producto-carrito-compras.component.sass'
})
export class ProductoCarritoComprasComponent {
  @Input() producto!: ProductoListadoCarritoCompras;

}
