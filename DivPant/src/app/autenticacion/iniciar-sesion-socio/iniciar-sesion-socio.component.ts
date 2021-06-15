import { Component, OnInit } from '@angular/core';

import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-iniciar-sesion-socio',
  templateUrl: './iniciar-sesion-socio.component.html',
  styleUrls: ['./iniciar-sesion-socio.component.css']
})
export class IniciarSesionSocioComponent implements OnInit {
  title = 'Divisas Pantera';
  entrar1:boolean = true;
  salir1:boolean = false;

  constructor(private divisas: DivisasService) { }

  ngOnInit(): void {
  }

  next() {
    this.entrar1 = false;
    this.salir1 = true;
  }

}
