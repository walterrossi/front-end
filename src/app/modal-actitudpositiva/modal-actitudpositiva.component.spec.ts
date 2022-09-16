import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActitudpositivaComponent } from './modal-actitudpositiva.component';

describe('ModalActitudpositivaComponent', () => {
  let component: ModalActitudpositivaComponent;
  let fixture: ComponentFixture<ModalActitudpositivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActitudpositivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalActitudpositivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
