import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterRegistrationComponent } from './recruiter-registration.component';

describe('RecruiterRegistrationComponent', () => {
  let component: RecruiterRegistrationComponent;
  let fixture: ComponentFixture<RecruiterRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterRegistrationComponent]
    });
    fixture = TestBed.createComponent(RecruiterRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
