import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesCompetencesComponent } from './languages-competences.component';

describe('LanguagesCompetencesComponent', () => {
  let component: LanguagesCompetencesComponent;
  let fixture: ComponentFixture<LanguagesCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
