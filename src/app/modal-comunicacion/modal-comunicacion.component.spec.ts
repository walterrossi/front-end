import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComunicacionComponent } from './modal-comunicacion.component';

describe('ModalComunicacionComponent', () => {
  let component: ModalComunicacionComponent;
  let fixture: ComponentFixture<ModalComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalComunicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
