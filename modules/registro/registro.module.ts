import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RegistroRoutingModule } from './registro-routing.module';
import { HeaderComponent } from "../../components/header/header.component";

@NgModule({
    declarations: [
        RegistroComponent,
    ],
    imports: [
        CommonModule,
        RegistroRoutingModule,
        HeaderComponent
    ]
})
export class RegistroModule { }
