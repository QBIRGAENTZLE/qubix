import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentsCompetencesComponent } from './developments-competences.component';

describe('DevelopmentsCompetencesComponent', () => {
  let component: DevelopmentsCompetencesComponent;
  let fixture: ComponentFixture<DevelopmentsCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentsCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentsCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
