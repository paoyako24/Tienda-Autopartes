import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent {
  categorias = [
    { nombre: 'Llantas', imagen: 'assets/imagen/llanta.avif' },
    { nombre: 'Frenos', imagen: 'assets/imagen/frenos2.webp' },
    { nombre: 'Rines', imagen: 'assets/imagen/rines.jpg' },
    { nombre: 'Baterías', imagen: 'assets/imagen/bateria.webp' },
    { nombre: 'Asientos', imagen: 'assets/imagen/asientos.jpg' }
  ];

  productos = [
    { nombre: 'Bujía NGK Platino', precio: 1842, imagen: 'assets/imagen/bujia1.jpg' },
    { nombre: 'Bujía Bosch Iridium', precio: 1842, imagen: 'assets/imagen/bujia2.jpg' },
    { nombre: 'Juego de 4 Bujías NGK', precio: 1842, imagen: 'assets/imagen/bujia3.jpg' }
  ];
}
