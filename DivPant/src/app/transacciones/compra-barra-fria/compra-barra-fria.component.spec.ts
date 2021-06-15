import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraBarraFriaComponent } from './compra-barra-fria.component';

describe('CompraBarraFriaComponent', () => {
  let component: CompraBarraFriaComponent;
  let fixture: ComponentFixture<CompraBarraFriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraBarraFriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraBarraFriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
