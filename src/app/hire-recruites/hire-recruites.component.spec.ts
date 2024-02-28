import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireRecruitesComponent } from './hire-recruites.component';

describe('HireRecruitesComponent', () => {
  let component: HireRecruitesComponent;
  let fixture: ComponentFixture<HireRecruitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HireRecruitesComponent]
    });
    fixture = TestBed.createComponent(HireRecruitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
