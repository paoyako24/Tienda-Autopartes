import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TiendasOficiales } from '../../models/tiendas-oficiales';

@Component({
  selector: 'app-tiendas-oficiales',
  standalone: true,
  imports: [],
  templateUrl: './tiendas-oficiales.component.html',
  styleUrl: './tiendas-oficiales.component.sass',
  encapsulation: ViewEncapsulation.None,
})
export class TiendasOficialesComponent {

  @Input()
  listadoTiendas: TiendasOficiales[] = [
    {
      srcImg: 'assets/imagenes/pagina-principal/trackone.svg',
      link: ''
    },
    {
      srcImg: 'assets/imagenes/pagina-principal/radec.svg',
      link: ''
    },
    {
      srcImg: 'assets/imagenes/pagina-principal/totalparts.svg',
      link: ''
    },
    {
      srcImg: 'assets/imagenes/pagina-principal/eagle.svg',
      link: ''
    },
    {
      srcImg: 'assets/imagenes/pagina-principal/dynamic.svg',
      link: ''
    }
  ]

  @Input()
  tiendaPrincipal: TiendasOficiales = {
    srcImg: 'assets/imagenes/pagina-principal/deynac.svg',
    link: ''
  };

  constructor() { }

}
