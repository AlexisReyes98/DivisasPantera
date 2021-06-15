import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { PagoServicioComponent } from './pago-servicio/pago-servicio.component';
import { CompraServicioComponent } from './compra-servicio/compra-servicio.component';


@NgModule({
  declarations: [
    TransferenciasComponent,
    ComprobanteComponent,
    PagoServicioComponent,
    CompraServicioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransaccionesModule { }
