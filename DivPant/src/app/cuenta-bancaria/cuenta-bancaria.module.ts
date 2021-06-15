import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { EstadoDeCuentaComponent } from './estado-de-cuenta/estado-de-cuenta.component';
import { HistPagosComponent } from './hist-pagos/hist-pagos.component';
import { HistComprasComponent } from './hist-compras/hist-compras.component';
import { HistTransferenciasComponent } from './hist-transferencias/hist-transferencias.component';
import { HistSaldosCargadosComponent } from './hist-saldos-cargados/hist-saldos-cargados.component';


@NgModule({
  declarations: [
    InfoPersonalComponent,
    EstadoDeCuentaComponent,
    HistPagosComponent,
    HistComprasComponent,
    HistTransferenciasComponent,
    HistSaldosCargadosComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CuentaBancariaModule { }
