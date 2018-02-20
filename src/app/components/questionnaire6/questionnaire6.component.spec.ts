import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionnaire6Component } from './questionnaire6.component';

describe('Questionnaire6Component', () => {
  let component: Questionnaire6Component;
  let fixture: ComponentFixture<Questionnaire6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questionnaire6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionnaire6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
