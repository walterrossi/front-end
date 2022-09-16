import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreatividadComponent } from './modal-creatividad.component';

describe('ModalCreatividadComponent', () => {
  let component: ModalCreatividadComponent;
  let fixture: ComponentFixture<ModalCreatividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreatividadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreatividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
