import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSocioComponent } from './menu-socio/menu-socio.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuGerenteComponent } from './menu-gerente/menu-gerente.component';



@NgModule({
  declarations: [
    MenuSocioComponent,
    MenuAdminComponent,
    MenuGerenteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrincipalModule { }
