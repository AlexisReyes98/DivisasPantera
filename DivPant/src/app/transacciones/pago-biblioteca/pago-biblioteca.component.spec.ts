import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoBibliotecaComponent } from './pago-biblioteca.component';

describe('PagoBibliotecaComponent', () => {
  let component: PagoBibliotecaComponent;
  let fixture: ComponentFixture<PagoBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
