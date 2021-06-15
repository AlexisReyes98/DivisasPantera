import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-socio',
  templateUrl: './menu-socio.component.html',
  styleUrls: ['./menu-socio.component.css']
})
export class MenuSocioComponent implements OnInit {
  entrar2:boolean = true;
  salir2:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.entrar2 = false;
    this.salir2 = true;
  }

}
