import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraLibreriaComponent } from './compra-libreria.component';

describe('CompraLibreriaComponent', () => {
  let component: CompraLibreriaComponent;
  let fixture: ComponentFixture<CompraLibreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraLibreriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraLibreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
