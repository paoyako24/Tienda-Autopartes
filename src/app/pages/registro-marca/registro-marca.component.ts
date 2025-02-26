import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-marca',
  templateUrl: './registro-marca.component.html',
  styleUrls: ['./registro-marca.component.scss']
})
export class RegistroMarcaComponent {
  nombreComercial: string = '';
  telefonoEmpresa: string = '';
  cif: string = '';
  calle: string = '';
  numeroExt: string = '';
  numeroInt: string = '';
  colonia: string = '';
  codigoPostal: string = '';
  aceptaTerminos: boolean = false;
  recibeInfo: boolean = false;

  constructor(private router: Router) {}

  registrarMarca() {
    if (this.aceptaTerminos) {
      alert('Registro exitoso');
      this.router.navigate(['/login']); // Redirigir a Login después del registro
    } else {
      alert('Debes aceptar los términos y condiciones');
    }
  }
}
