import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEncabezadoNombreComponent } from './modal-encabezado-nombre.component';

describe('ModalEncabezadoNombreComponent', () => {
  let component: ModalEncabezadoNombreComponent;
  let fixture: ComponentFixture<ModalEncabezadoNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEncabezadoNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEncabezadoNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
