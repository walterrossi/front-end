import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPensamientocriticoComponent } from './modal-pensamientocritico.component';

describe('ModalPensamientocriticoComponent', () => {
  let component: ModalPensamientocriticoComponent;
  let fixture: ComponentFixture<ModalPensamientocriticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPensamientocriticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPensamientocriticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
