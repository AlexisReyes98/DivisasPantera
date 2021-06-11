import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarSesionSocioComponent } from './iniciar-sesion-socio/iniciar-sesion-socio.component';
import { IniciarSesionEmpleadoComponent } from './iniciar-sesion-empleado/iniciar-sesion-empleado.component';



@NgModule({
  declarations: [
    IniciarSesionSocioComponent,
    IniciarSesionEmpleadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AutenticacionModule { }
