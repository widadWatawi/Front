import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationListTachesComponent } from './affectation-list-taches.component';

describe('AffectationListTachesComponent', () => {
  let component: AffectationListTachesComponent;
  let fixture: ComponentFixture<AffectationListTachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationListTachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationListTachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
