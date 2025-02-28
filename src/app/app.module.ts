import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // ✅ Importado
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // ✅ Importado para pipes y *ngFor

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroMarcaComponent } from './pages/registro-marca/registro-marca.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroMarcaComponent,
    TiendaComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,  // ✅ Necesario para `router-outlet`
    AppRoutingModule,
    FormsModule,  // ✅ Para `ngModel`
    CommonModule  // ✅ Para `*ngFor` y `number` pipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }











