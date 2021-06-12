import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Divisas Pantera';

  next1() {
    '<app-iniciar-sesion-socio></app-iniciar-sesion-socio>'
  }

  next2() {
    '<app-iniciar-sesion-empleado></app-iniciar-sesion-empleado>'
  }

}
