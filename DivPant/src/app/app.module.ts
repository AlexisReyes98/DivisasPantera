import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//service
import { UsuariosService } from './services/usuarios.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutenticacionModule } from './autenticacion/autenticacion.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutenticacionModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
