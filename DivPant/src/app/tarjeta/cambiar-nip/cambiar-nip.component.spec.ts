import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarNipComponent } from './cambiar-nip.component';

describe('CambiarNipComponent', () => {
  let component: CambiarNipComponent;
  let fixture: ComponentFixture<CambiarNipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarNipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarNipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
