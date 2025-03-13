import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerminarCompraRoutingModule } from './terminar-compra-routing.module';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { TerminarCompraComponent } from './terminar-compra.component';
import { DatosCompradorComponent } from './components/datos-comprador/datos-comprador.component';
import { ResumenArticulosComponent } from './components/resumen-articulos/resumen-articulos.component';
import { ResumenCompraComponent } from '../../components/resumen-compra/resumen-compra.component';


@NgModule({
  declarations: [
    TerminarCompraComponent,
  ],
  imports: [
    CommonModule,
    TerminarCompraRoutingModule,
    ResumenArticulosComponent,
    DatosCompradorComponent,
    ResumenCompraComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class TerminarCompraModule { }
