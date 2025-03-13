import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  public numMensajes: number = 0;
  public numNotificaciones: number = 0;
  public numArtCarritoCompras: number = 5;

  constructor() { }
}
