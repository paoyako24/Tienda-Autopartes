import { Component, OnInit } from '@angular/core';
import { TarjetaProducto } from '../../models/tarjeta-producto';
import { TARJETAS_PRODUCTOS_BUSQUEDA } from '../../../assets/constantes/objetos';
import { FooterComponent } from "../../components/footer/footer.component";
import { TarjetaProductoComponent } from "../../components/tarjeta-producto/tarjeta-producto.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.sass',
  imports: [FooterComponent, TarjetaProductoComponent, HeaderComponent]
})
export class TiendaComponent implements OnInit {

  TARJETAS_PRODUCTOS_BUSQUEDA = TARJETAS_PRODUCTOS_BUSQUEDA;

  public crumbs: string[] = ["Motor", "bujias"];
  public tarjetaProducto: TarjetaProducto[] = this.TARJETAS_PRODUCTOS_BUSQUEDA;

  constructor() {

  }

  ngOnInit(): void {

  }

}

