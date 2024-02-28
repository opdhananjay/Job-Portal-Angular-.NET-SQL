import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedCompaniesPendingInRecruiterComponent } from './applied-companies-pending-in-recruiter.component';

describe('AppliedCompaniesPendingInRecruiterComponent', () => {
  let component: AppliedCompaniesPendingInRecruiterComponent;
  let fixture: ComponentFixture<AppliedCompaniesPendingInRecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedCompaniesPendingInRecruiterComponent]
    });
    fixture = TestBed.createComponent(AppliedCompaniesPendingInRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
