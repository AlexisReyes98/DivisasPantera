import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSocioComponent } from './eliminar-socio.component';

describe('EliminarSocioComponent', () => {
  let component: EliminarSocioComponent;
  let fixture: ComponentFixture<EliminarSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
