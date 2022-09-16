import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoEditComponent } from './proyecto-edit.component';

describe('ProyectoEditComponent', () => {
  let component: ProyectoEditComponent;
  let fixture: ComponentFixture<ProyectoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
