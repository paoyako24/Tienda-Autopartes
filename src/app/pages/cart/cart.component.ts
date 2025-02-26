import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productos = [
    { nombre: 'VEMO Bujía de encendido Q+', precio: 250.00, cantidad: 1, imagen: 'https://via.placeholder.com/80' }
  ];

  subtotal = this.productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
  envio = 250.00;
  total = this.subtotal + this.envio;

  constructor(private router: Router) {}

  actualizarTotal() {
    this.subtotal = this.productos.reduce((sum, p) => sum + p.precio * p.cantidad, 0);
    this.total = this.subtotal + this.envio;
  }

  cambiarCantidad(index: number, cambio: number) {
    if (this.productos[index].cantidad + cambio > 0) {
      this.productos[index].cantidad += cambio;
      this.actualizarTotal();
    }
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
    this.actualizarTotal();
  }

  irAPago() {
    this.router.navigate(['/checkout']);
  }
}
