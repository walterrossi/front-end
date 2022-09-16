import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperienciaImgComponent } from './modal-experiencia-img.component';

describe('ModalExperienciaImgComponent', () => {
  let component: ModalExperienciaImgComponent;
  let fixture: ComponentFixture<ModalExperienciaImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExperienciaImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExperienciaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
