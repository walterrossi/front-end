import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEncabezadoComponent } from './modal-encabezado.component';

describe('ModalEncabezadoComponent', () => {
  let component: ModalEncabezadoComponent;
  let fixture: ComponentFixture<ModalEncabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEncabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEncabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
