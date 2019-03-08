import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementsCompetencesComponent } from './managements-competences.component';

describe('ManagementsCompetencesComponent', () => {
  let component: ManagementsCompetencesComponent;
  let fixture: ComponentFixture<ManagementsCompetencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementsCompetencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementsCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
