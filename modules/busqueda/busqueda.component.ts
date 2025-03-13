import { Component, OnInit } from '@angular/core';
import { TarjetaProducto } from '../../models/tarjeta-producto';
import { TARJETAS_PRODUCTOS_BUSQUEDA } from '../../../assets/constantes/objetos';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.sass'
})
export class BusquedaComponent implements OnInit {

  TARJETAS_PRODUCTOS_BUSQUEDA = TARJETAS_PRODUCTOS_BUSQUEDA;

  public crumbs: string[] = ["Motor", "bujias"];
  public tarjetaProducto: TarjetaProducto[] = this.TARJETAS_PRODUCTOS_BUSQUEDA;

  constructor() {

  }

  ngOnInit(): void {

  }

}
