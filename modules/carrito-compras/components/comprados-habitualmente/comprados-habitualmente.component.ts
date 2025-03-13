import { Component } from '@angular/core';
import { TarjetaProductoComponent } from "../../../../components/tarjeta-producto/tarjeta-producto.component";
import { TARJETAS_PRODUCTOS_BUSQUEDA } from '../../../../../assets/constantes/objetos';
import { TarjetaProducto } from '../../../../models/tarjeta-producto';

@Component({
  selector: 'app-comprados-habitualmente',
  standalone: true,
  imports: [TarjetaProductoComponent],
  templateUrl: './comprados-habitualmente.component.html',
  styleUrl: './comprados-habitualmente.component.sass'
})
export class CompradosHabitualmenteComponent {

  TARJETAS_PRODUCTOS_BUSQUEDA = TARJETAS_PRODUCTOS_BUSQUEDA;

  public productos: TarjetaProducto[] = this.TARJETAS_PRODUCTOS_BUSQUEDA.slice(0, 3);

}
