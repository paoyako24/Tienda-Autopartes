import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  productos = [
    { nombre: 'Bujía', precio: 250, cantidad: 1 },
    { nombre: 'Filtro de Aire', precio: 500, cantidad: 2 }
  ];

  get subtotal() {
    return this.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }

  get total() {
    const envio = 250;
    return this.subtotal + envio;
  }
}



