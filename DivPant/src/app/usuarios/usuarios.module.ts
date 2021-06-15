import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarSocioComponent } from './agregar-socio/agregar-socio.component';
import { ModificarSocioComponent } from './modificar-socio/modificar-socio.component';
import { EliminarSocioComponent } from './eliminar-socio/eliminar-socio.component';
import { AgregarAdminComponent } from './agregar-admin/agregar-admin.component';
import { ModificarAdminComponent } from './modificar-admin/modificar-admin.component';
import { EliminarAdminComponent } from './eliminar-admin/eliminar-admin.component';



@NgModule({
  declarations: [
    AgregarSocioComponent,
    ModificarSocioComponent,
    EliminarSocioComponent,
    AgregarAdminComponent,
    ModificarAdminComponent,
    EliminarAdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsuariosModule { }
