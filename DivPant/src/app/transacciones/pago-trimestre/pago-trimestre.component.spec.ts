import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoTrimestreComponent } from './pago-trimestre.component';

describe('PagoTrimestreComponent', () => {
  let component: PagoTrimestreComponent;
  let fixture: ComponentFixture<PagoTrimestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoTrimestreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoTrimestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
