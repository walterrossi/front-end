import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHtmlComponent } from './modal-html.component';

describe('ModalHtmlComponent', () => {
  let component: ModalHtmlComponent;
  let fixture: ComponentFixture<ModalHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
