import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageApplicatonComponent } from './home-page-applicaton.component';

describe('HomePageApplicatonComponent', () => {
  let component: HomePageApplicatonComponent;
  let fixture: ComponentFixture<HomePageApplicatonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageApplicatonComponent]
    });
    fixture = TestBed.createComponent(HomePageApplicatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
