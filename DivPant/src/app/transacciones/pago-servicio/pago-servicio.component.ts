import { Component, OnInit } from '@angular/core';

import { PagoServicio } from 'src/app/model/pago-servicio';

import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-pago-servicio',
  templateUrl: './pago-servicio.component.html',
  styleUrls: ['./pago-servicio.component.css']
})
export class PagoServicioComponent implements OnInit {
  entrar3:boolean = true;
  salir3:boolean = false;

  game: PagoServicio = {
    id_Pago: 0,
    id_TipoPago: '',
    id_Socio: 0,
    fecha: new Date(),
    monto: 0
  };

  constructor(private divisas: DivisasService) { }

  ngOnInit(): void {
  }

  next() {
    this.entrar3 = false;
    this.salir3 = true;
  }

}
