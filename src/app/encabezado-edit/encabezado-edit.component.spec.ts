import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncabezadoEditComponent } from './encabezado-edit.component';

describe('EncabezadoEditComponent', () => {
  let component: EncabezadoEditComponent;
  let fixture: ComponentFixture<EncabezadoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncabezadoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncabezadoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
