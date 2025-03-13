import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusquedaRoutingModule } from './busqueda-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BusquedaComponent } from './busqueda.component';
import { TarjetaProductoComponent } from "../../components/tarjeta-producto/tarjeta-producto.component";


@NgModule({
    declarations: [
        BusquedaComponent
    ],
    imports: [
        CommonModule,
        BusquedaRoutingModule,
        HeaderComponent,
        FooterComponent,
        TarjetaProductoComponent
    ]
})
export class BusquedaModule { }
