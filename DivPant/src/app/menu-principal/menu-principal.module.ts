import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuSocioComponent } from './menu-socio/menu-socio.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuGerenteComponent } from './menu-gerente/menu-gerente.component';

import { TransaccionesModule } from '../transacciones/transacciones.module';
import { PagoServicioComponent } from '../transacciones/pago-servicio/pago-servicio.component';

import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'pagoServicio', component: PagoServicioComponent}
]

@NgModule({
  declarations: [
    MenuSocioComponent,
    MenuAdminComponent,
    MenuGerenteComponent
  ],
  imports: [
    CommonModule,
    TransaccionesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    MenuSocioComponent,
    MenuAdminComponent,
    MenuGerenteComponent,
    RouterModule
  ]
})
export class MenuPrincipalModule { }
