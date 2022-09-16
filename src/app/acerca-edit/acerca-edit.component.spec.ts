import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaEditComponent } from './acerca-edit.component';

describe('AcercaEditComponent', () => {
  let component: AcercaEditComponent;
  let fixture: ComponentFixture<AcercaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
