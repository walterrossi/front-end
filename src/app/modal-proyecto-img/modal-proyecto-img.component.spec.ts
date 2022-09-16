import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProyectoImgComponent } from './modal-proyecto-img.component';

describe('ModalProyectoImgComponent', () => {
  let component: ModalProyectoImgComponent;
  let fixture: ComponentFixture<ModalProyectoImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProyectoImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProyectoImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
