import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducacionImgComponent } from './modal-educacion-img.component';

describe('ModalEducacionImgComponent', () => {
  let component: ModalEducacionImgComponent;
  let fixture: ComponentFixture<ModalEducacionImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEducacionImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEducacionImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
