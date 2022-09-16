import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaEditComponent } from './experiencia-edit.component';

describe('ExperienciaEditComponent', () => {
  let component: ExperienciaEditComponent;
  let fixture: ComponentFixture<ExperienciaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienciaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienciaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
