import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionnaire5Component } from './questionnaire5.component';

describe('Questionnaire5Component', () => {
  let component: Questionnaire5Component;
  let fixture: ComponentFixture<Questionnaire5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questionnaire5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionnaire5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
