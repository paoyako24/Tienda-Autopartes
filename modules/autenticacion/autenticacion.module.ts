import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';

@NgModule({
  declarations: [
    InicioSesionComponent,
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
  ]
})
export class AutenticacionModule { }
