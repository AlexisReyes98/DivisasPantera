import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistSaldosCargadosComponent } from './hist-saldos-cargados.component';

describe('HistSaldosCargadosComponent', () => {
  let component: HistSaldosCargadosComponent;
  let fixture: ComponentFixture<HistSaldosCargadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistSaldosCargadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistSaldosCargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
