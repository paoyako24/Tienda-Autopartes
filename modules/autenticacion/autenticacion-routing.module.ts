import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InicioAutenticacionComponent } from './components/inicio-autenticacion/inicio-autenticacion.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';

const routes: Routes = [
    {
        path: '',
        component: InicioAutenticacionComponent,
        children: [
            {
                path: '',
                component: InicioSesionComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AutenticacionRoutingModule {

}