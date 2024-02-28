import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveFriendRequestsComponent } from './receive-friend-requests.component';

describe('ReceiveFriendRequestsComponent', () => {
  let component: ReceiveFriendRequestsComponent;
  let fixture: ComponentFixture<ReceiveFriendRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveFriendRequestsComponent]
    });
    fixture = TestBed.createComponent(ReceiveFriendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
