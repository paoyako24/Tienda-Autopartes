import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.sass'
})
export class InicioSesionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  iniciarSesion(): void {
    void this.router.navigate(['/home']);
  }

  irARegistrarse(): void {
    void this.router.navigate(['/registro']);
  }
}
