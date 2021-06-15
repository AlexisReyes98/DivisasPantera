import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoExamenRecuComponent } from './pago-examen-recu.component';

describe('PagoExamenRecuComponent', () => {
  let component: PagoExamenRecuComponent;
  let fixture: ComponentFixture<PagoExamenRecuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoExamenRecuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoExamenRecuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
