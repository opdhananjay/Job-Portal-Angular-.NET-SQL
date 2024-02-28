import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedRrecruitersOnCompaniesComponent } from './applied-rrecruiters-on-companies.component';

describe('AppliedRrecruitersOnCompaniesComponent', () => {
  let component: AppliedRrecruitersOnCompaniesComponent;
  let fixture: ComponentFixture<AppliedRrecruitersOnCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedRrecruitersOnCompaniesComponent]
    });
    fixture = TestBed.createComponent(AppliedRrecruitersOnCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
