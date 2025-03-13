import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TarjetaProducto } from '../../models/tarjeta-producto';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.sass'
})
export class TarjetaProductoComponent {

  @Input()
  public tarjetaProducto!: TarjetaProducto;

  @Input()
  public mostrarCheck: boolean = false;

  constructor() { }
}
