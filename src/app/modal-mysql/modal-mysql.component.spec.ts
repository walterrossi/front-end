import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMysqlComponent } from './modal-mysql.component';

describe('ModalMysqlComponent', () => {
  let component: ModalMysqlComponent;
  let fixture: ComponentFixture<ModalMysqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMysqlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
