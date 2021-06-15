import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarSesionSocioComponent } from './iniciar-sesion-socio/iniciar-sesion-socio.component';
import { IniciarSesionEmpleadoComponent } from './iniciar-sesion-empleado/iniciar-sesion-empleado.component';

import { MenuPrincipalModule } from '../menu-principal/menu-principal.module';
import { MenuSocioComponent } from '../menu-principal/menu-socio/menu-socio.component';
import { MenuAdminComponent } from '../menu-principal/menu-admin/menu-admin.component';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'menuSocio', component: MenuSocioComponent },
  { path: 'menuEmpleado', component: MenuAdminComponent }
]

@NgModule({
  declarations: [
    IniciarSesionSocioComponent,
    IniciarSesionEmpleadoComponent
  ],
  imports: [
    CommonModule,
    MenuPrincipalModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AutenticacionModule { }
