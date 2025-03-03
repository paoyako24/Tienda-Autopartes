import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {
  productos = [
    { nombre: 'Bujía', precio: 250, cantidad: 1 },
    { nombre: 'Filtro de Aire', precio: 500, cantidad: 2 }
  ];

  disminuirCantidad(index: number) {
    if (this.productos[index].cantidad > 1) {
      this.productos[index].cantidad--;
    }
  }

  aumentarCantidad(index: number) {
    this.productos[index].cantidad++;
  }

  get subtotal() {
    return this.productos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  get total() {
    return this.subtotal + 250; // 250 es el costo de envío
  }
}



