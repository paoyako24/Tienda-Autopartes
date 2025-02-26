import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categorias = [
    { nombre: 'Llantas', imagen: 'assets/imagen/llanta.avif' },
    { nombre: 'Frenos', imagen: 'assets/imagen/frenos2.webp' },
    { nombre: 'Rines', imagen: 'assets/imagen/rines.jpg' },
    { nombre: 'Baterías', imagen: 'assets/imagen/bateria.webp' },
    { nombre: 'Asientos', imagen: 'assets/imagen/asientos.jpg' }
  ];

  tiendas = [
    'assets/imagen/trackone2.jpg',
    'assets/imagen/REDEC.jpg',
    'assets/imagen/PARTS.png',
    'assets/imagen/282.jpg',
    'assets/imagen/DYNAMIK.jpg'
  ];

  recientes = [
    { nombre: 'Llantas', precio: 4500, imagen: 'assets/imagen/llanta.avif' },
    { nombre: 'Frenos', precio: 3200, imagen: 'assets/imagen/frenos2.webp' },
    { nombre: 'Rines', precio: 2800, imagen: 'assets/imagen/rines.jpg' },
    { nombre: 'Baterías', precio: 1800, imagen: 'assets/imagen/bateria.webp' },
    { nombre: 'Asientos', precio: 7500, imagen: 'assets/imagen/asientos.jpg' }
  ];

  constructor(private router: Router) {}

  cerrarSesion() {
    this.router.navigate(['/login']);
  }
}
