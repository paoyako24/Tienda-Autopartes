import { Component, Input } from '@angular/core';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.sass'
})
export class CategoriasComponent {
  @Input()
  categorias: Categoria[] = [
    {
      srcImg: 'assets/imagenes/pagina-principal/categorias/llantas.svg',
      tituloCategoria: 'Llantas',
    },
    {
      srcImg: 'assets/imagenes/pagina-principal/categorias/frenos.svg',
      tituloCategoria: 'Frenos',
    },
    {
      srcImg: 'assets/imagenes/pagina-principal/categorias/rines.svg',
      tituloCategoria: 'Rines',
    },
    {
      srcImg: 'assets/imagenes/pagina-principal/categorias/baterias.svg',
      tituloCategoria: 'Baterías',
    },
    {
      srcImg: 'assets/imagenes/pagina-principal/categorias/asientos.svg',
      tituloCategoria: 'Asientos',
    },
  ];

  constructor() { }
}
