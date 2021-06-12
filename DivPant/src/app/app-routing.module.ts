import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IniciarSesionSocioComponent } from './autenticacion/iniciar-sesion-socio/iniciar-sesion-socio.component'
import { IniciarSesionEmpleadoComponent } from './autenticacion/iniciar-sesion-empleado/iniciar-sesion-empleado.component';

export const routes: Routes = [
  { path: 'inicioSocio', component: IniciarSesionSocioComponent },
  { path: 'inicioEmpleado', component: IniciarSesionEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
