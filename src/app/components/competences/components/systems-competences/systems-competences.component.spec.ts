import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsCompetencesComponent } from './systems-competences.component';

describe('SystemsCompetencesComponent', () => {
  let component: SystemsCompetencesComponent;
  let fixture: ComponentFixture<SystemsCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemsCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
