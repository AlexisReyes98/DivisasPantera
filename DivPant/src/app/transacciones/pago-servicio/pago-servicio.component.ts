import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-servicio',
  templateUrl: './pago-servicio.component.html',
  styleUrls: ['./pago-servicio.component.css']
})
export class PagoServicioComponent implements OnInit {
  entrar3:boolean = true;
  salir3:boolean = false;

  lista = document.getElementById("lista");
	tareaInput = document.getElementById("tareaInput");
	btnNuevaTarea = document.getElementById("btn-agregar");

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.entrar3 = false;
    this.salir3 = true;
  }

}
