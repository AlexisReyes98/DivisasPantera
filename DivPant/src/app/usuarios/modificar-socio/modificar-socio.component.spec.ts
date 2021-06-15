import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSocioComponent } from './modificar-socio.component';

describe('ModificarSocioComponent', () => {
  let component: ModificarSocioComponent;
  let fixture: ComponentFixture<ModificarSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
