import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//service
import { DivisasService } from './services/divisas.service';

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
    DivisasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
