import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCssComponent } from './modal-css.component';

describe('ModalCssComponent', () => {
  let component: ModalCssComponent;
  let fixture: ComponentFixture<ModalCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
