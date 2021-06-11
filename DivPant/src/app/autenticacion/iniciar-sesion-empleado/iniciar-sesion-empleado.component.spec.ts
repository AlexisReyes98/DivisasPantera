import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSesionEmpleadoComponent } from './iniciar-sesion-empleado.component';

describe('IniciarSesionEmpleadoComponent', () => {
  let component: IniciarSesionEmpleadoComponent;
  let fixture: ComponentFixture<IniciarSesionEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSesionEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSesionEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
