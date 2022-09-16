import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGestiondeltiempoComponent } from './modal-gestiondeltiempo.component';

describe('ModalGestiondeltiempoComponent', () => {
  let component: ModalGestiondeltiempoComponent;
  let fixture: ComponentFixture<ModalGestiondeltiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGestiondeltiempoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGestiondeltiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
