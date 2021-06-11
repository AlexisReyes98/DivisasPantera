import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambiarNipComponent } from './cambiar-nip/cambiar-nip.component';
import { BloquearTarjetaComponent } from './bloquear-tarjeta/bloquear-tarjeta.component';
import { ActivarTarjetaComponent } from './activar-tarjeta/activar-tarjeta.component';



@NgModule({
  declarations: [
    CambiarNipComponent,
    BloquearTarjetaComponent,
    ActivarTarjetaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TarjetaModule { }
