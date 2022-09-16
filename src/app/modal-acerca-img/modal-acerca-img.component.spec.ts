import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcercaImgComponent } from './modal-acerca-img.component';

describe('ModalAcercaImgComponent', () => {
  let component: ModalAcercaImgComponent;
  let fixture: ComponentFixture<ModalAcercaImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcercaImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAcercaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
