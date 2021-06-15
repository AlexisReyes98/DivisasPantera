import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {
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
