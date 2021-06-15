import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaBancComponent } from './cuenta-banc/cuenta-banc.component';
import { InfoPersonalComponent } from './info-personal/info-personal.component';
import { EstadoDeCuentaComponent } from './estado-de-cuenta/estado-de-cuenta.component';
import { HistPagosComponent } from './hist-pagos/hist-pagos.component';
import { HistComprasComponent } from './hist-compras/hist-compras.component';
import { HistTransferenciasComponent } from './hist-transferencias/hist-transferencias.component';
import { SaldosCargadosComponent } from './saldos-cargados/saldos-cargados.component';



@NgModule({
  declarations: [
    CuentaBancComponent,
    InfoPersonalComponent,
    EstadoDeCuentaComponent,
    HistPagosComponent,
    HistComprasComponent,
    HistTransferenciasComponent,
    SaldosCargadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CuentaBancariaModule { }
