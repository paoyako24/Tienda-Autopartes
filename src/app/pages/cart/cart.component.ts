import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productos = [
    { nombre: 'Bujía', precio: 250, cantidad: 1 },
    { nombre: 'Filtro de Aire', precio: 500, cantidad: 2 }
  ];

  get subtotal(): number {
    return this.productos.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  }

  get total(): number {
    const envio = 250;
    return this.subtotal + envio;
  }

  disminuirCantidad(index: number) {
    this.productos[index].cantidad = Math.max(1, this.productos[index].cantidad - 1);
  }

  aumentarCantidad(index: number) {
    this.productos[index].cantidad += 1;
  }
}




