import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciasComponent } from './transferencias/transferencias.component';
import { ComprobanteComponent } from './comprobante/comprobante.component';
import { CompraLibreriaComponent } from './compra-libreria/compra-libreria.component';
import { CompraBarraFriaComponent } from './compra-barra-fria/compra-barra-fria.component';
import { PagoTrimestreComponent } from './pago-trimestre/pago-trimestre.component';
import { PagoAnualidadComponent } from './pago-anualidad/pago-anualidad.component';
import { PagoBibliotecaComponent } from './pago-biblioteca/pago-biblioteca.component';
import { PagoComedorComponent } from './pago-comedor/pago-comedor.component';
import { PagoExamenRecuComponent } from './pago-examen-recu/pago-examen-recu.component';



@NgModule({
  declarations: [
    TransferenciasComponent,
    ComprobanteComponent,
    CompraLibreriaComponent,
    CompraBarraFriaComponent,
    PagoTrimestreComponent,
    PagoAnualidadComponent,
    PagoBibliotecaComponent,
    PagoComedorComponent,
    PagoExamenRecuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransaccionesModule { }
