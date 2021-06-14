import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistTransferenciasComponent } from './hist-transferencias.component';

describe('HistTransferenciasComponent', () => {
  let component: HistTransferenciasComponent;
  let fixture: ComponentFixture<HistTransferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistTransferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistTransferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
