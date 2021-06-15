import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaBancComponent } from './cuenta-banc.component';

describe('CuentaBancComponent', () => {
  let component: CuentaBancComponent;
  let fixture: ComponentFixture<CuentaBancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaBancComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaBancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
