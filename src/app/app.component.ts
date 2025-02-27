import { Component } from '@angular/core';
import { CartComponent } from "./pages/cart/cart.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CartComponent]
})
export class AppComponent {
  title = 'Tienda-Autopartes';
}
