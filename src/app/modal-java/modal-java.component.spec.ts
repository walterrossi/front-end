import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJavaComponent } from './modal-java.component';

describe('ModalJavaComponent', () => {
  let component: ModalJavaComponent;
  let fixture: ComponentFixture<ModalJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
