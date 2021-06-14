import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoAnualidadComponent } from './pago-anualidad.component';

describe('PagoAnualidadComponent', () => {
  let component: PagoAnualidadComponent;
  let fixture: ComponentFixture<PagoAnualidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoAnualidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoAnualidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
