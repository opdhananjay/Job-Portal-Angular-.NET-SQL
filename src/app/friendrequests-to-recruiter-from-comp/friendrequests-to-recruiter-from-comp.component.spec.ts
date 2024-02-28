import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendrequestsToRecruiterFromCompComponent } from './friendrequests-to-recruiter-from-comp.component';

describe('FriendrequestsToRecruiterFromCompComponent', () => {
  let component: FriendrequestsToRecruiterFromCompComponent;
  let fixture: ComponentFixture<FriendrequestsToRecruiterFromCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendrequestsToRecruiterFromCompComponent]
    });
    fixture = TestBed.createComponent(FriendrequestsToRecruiterFromCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
