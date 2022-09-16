import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJsComponent } from './modal-js.component';

describe('ModalJsComponent', () => {
  let component: ModalJsComponent;
  let fixture: ComponentFixture<ModalJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
