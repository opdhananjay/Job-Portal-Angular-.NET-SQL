import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterConpanyHomeComponent } from './recruiter-conpany-home.component';

describe('RecruiterConpanyHomeComponent', () => {
  let component: RecruiterConpanyHomeComponent;
  let fixture: ComponentFixture<RecruiterConpanyHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruiterConpanyHomeComponent]
    });
    fixture = TestBed.createComponent(RecruiterConpanyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
