import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule} from './tienda-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { TiendaComponent } from './tienda.component';
import { TarjetaProductoComponent } from "../../components/tarjeta-producto/tarjeta-producto.component";


@NgModule({
    declarations: [
        TiendaComponent,
    ],
    imports: [
        CommonModule,
        TiendaRoutingModule,
        HeaderComponent,
        FooterComponent,
        TarjetaProductoComponent
    ]
})
export class TiendaModule { }
