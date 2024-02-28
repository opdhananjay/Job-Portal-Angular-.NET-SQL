import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailsJobsComponent } from './view-details-jobs.component';

describe('ViewDetailsJobsComponent', () => {
  let component: ViewDetailsJobsComponent;
  let fixture: ComponentFixture<ViewDetailsJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDetailsJobsComponent]
    });
    fixture = TestBed.createComponent(ViewDetailsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
