import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraServicioComponent } from './compra-servicio.component';

describe('CompraServicioComponent', () => {
  let component: CompraServicioComponent;
  let fixture: ComponentFixture<CompraServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
