import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent {
  contacto = {
    email: '',
    telefono: ''
  };

  direccion = {
    nombre: '',
    apellido: '',
    calle: '',
    numeroExt: '',
    numeroInt: '',
    colonia: '',
    codigoPostal: '',
    ciudad: '',
    estado: ''
  };

  pago = {
    titular: '',
    numeroTarjeta: ''
  };

  subtotal = 1000.00;
  envio = 250.00;
  total = this.subtotal + this.envio;

  constructor(private router: Router) {}

  comprar() {
    alert('Compra realizada con éxito');
    this.router.navigate(['/']);
  }
}
