import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaPrincipalRoutingModule } from './pagina-principal-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { TiendasOficialesComponent } from './components/tiendas-oficiales/tiendas-oficiales.component';
import { BasadosUltimaVisitaComponent } from './components/basados-ultima-visita/basados-ultima-visita.component';


@NgModule({
  declarations: [
    PaginaPrincipalComponent
  ],
  imports: [
    CommonModule,
    PaginaPrincipalRoutingModule,
    HeaderComponent,
    FooterComponent,
    CategoriasComponent,
    OfertasComponent,
    TiendasOficialesComponent,
    BasadosUltimaVisitaComponent,
  ]
})
export class PaginaPrincipalModule { }
