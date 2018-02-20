import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionnaire3Component } from './questionnaire3.component';

describe('Questionnaire3Component', () => {
  let component: Questionnaire3Component;
  let fixture: ComponentFixture<Questionnaire3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questionnaire3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Questionnaire3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
