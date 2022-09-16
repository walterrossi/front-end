import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAngularComponent } from './modal-angular.component';

describe('ModalAngularComponent', () => {
  let component: ModalAngularComponent;
  let fixture: ComponentFixture<ModalAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
