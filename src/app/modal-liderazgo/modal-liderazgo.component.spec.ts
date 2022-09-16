import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLiderazgoComponent } from './modal-liderazgo.component';

describe('ModalLiderazgoComponent', () => {
  let component: ModalLiderazgoComponent;
  let fixture: ComponentFixture<ModalLiderazgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLiderazgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLiderazgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
