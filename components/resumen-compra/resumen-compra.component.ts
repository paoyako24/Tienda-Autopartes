import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resumen-compra',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './resumen-compra.component.html',
  styleUrl: './resumen-compra.component.sass'
})
export class ResumenCompraComponent {

  @Input()
  tipoResumenCompra: 'carritoCompras' | 'terminarCompra' = 'carritoCompras';

  constructor() { }

}
