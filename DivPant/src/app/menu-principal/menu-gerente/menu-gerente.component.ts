import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-gerente',
  templateUrl: './menu-gerente.component.html',
  styleUrls: ['./menu-gerente.component.css']
})
export class MenuGerenteComponent implements OnInit {
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
