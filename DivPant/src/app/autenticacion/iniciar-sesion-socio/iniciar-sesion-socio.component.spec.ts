import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionSocioComponent } from './iniciar-sesion-socio.component';

describe('IniciarSesionSocioComponent', () => {
  let component: IniciarSesionSocioComponent;
  let fixture: ComponentFixture<IniciarSesionSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSesionSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
