import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoComedorComponent } from './pago-comedor.component';

describe('PagoComedorComponent', () => {
  let component: PagoComedorComponent;
  let fixture: ComponentFixture<PagoComedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoComedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoComedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
