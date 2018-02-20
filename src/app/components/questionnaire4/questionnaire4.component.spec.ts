import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionnaire4Component } from './questionnaire4.component';

describe('Questionnaire4Component', () => {
  let component: Questionnaire4Component;
  let fixture: ComponentFixture<Questionnaire4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questionnaire4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionnaire4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
