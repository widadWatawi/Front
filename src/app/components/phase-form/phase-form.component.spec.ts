import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseFormComponent } from './phase-form.component';

describe('PhaseFormComponent', () => {
  let component: PhaseFormComponent;
  let fixture: ComponentFixture<PhaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
