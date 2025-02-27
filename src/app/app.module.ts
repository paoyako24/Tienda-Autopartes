import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // ✅ NECESARIO PARA ngModel
import { CommonModule } from '@angular/common'; // ✅ NECESARIO PARA *ngFor y pipes

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
    RouterModule,
    AppRoutingModule,
    FormsModule,  // ✅ NECESARIO PARA ngModel
    CommonModule  // ✅ NECESARIO PARA *ngFor y pipes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }









