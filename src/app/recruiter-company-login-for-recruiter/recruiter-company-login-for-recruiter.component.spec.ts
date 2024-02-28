import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterCompanyLoginForRecruiterComponent } from './recruiter-company-login-for-recruiter.component';

describe('RecruiterCompanyLoginForRecruiterComponent', () => {
  let component: RecruiterCompanyLoginForRecruiterComponent;
  let fixture: ComponentFixture<RecruiterCompanyLoginForRecruiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterCompanyLoginForRecruiterComponent]
    });
    fixture = TestBed.createComponent(RecruiterCompanyLoginForRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
