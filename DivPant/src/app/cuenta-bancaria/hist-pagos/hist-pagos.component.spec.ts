import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistPagosComponent } from './hist-pagos.component';

describe('HistPagosComponent', () => {
  let component: HistPagosComponent;
  let fixture: ComponentFixture<HistPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
