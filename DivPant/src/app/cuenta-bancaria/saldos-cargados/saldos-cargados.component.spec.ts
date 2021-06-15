import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldosCargadosComponent } from './saldos-cargados.component';

describe('SaldosCargadosComponent', () => {
  let component: SaldosCargadosComponent;
  let fixture: ComponentFixture<SaldosCargadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldosCargadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldosCargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
