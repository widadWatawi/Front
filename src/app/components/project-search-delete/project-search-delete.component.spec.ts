import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSearchDeleteComponent } from './project-search-delete.component';

describe('ProjectSearchDeleteComponent', () => {
  let component: ProjectSearchDeleteComponent;
  let fixture: ComponentFixture<ProjectSearchDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSearchDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSearchDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
