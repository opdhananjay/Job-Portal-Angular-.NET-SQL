import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestsJobsComponent } from './latests-jobs.component';

describe('LatestsJobsComponent', () => {
  let component: LatestsJobsComponent;
  let fixture: ComponentFixture<LatestsJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestsJobsComponent]
    });
    fixture = TestBed.createComponent(LatestsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
