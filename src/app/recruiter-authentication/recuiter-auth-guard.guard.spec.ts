import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { recuiterAuthGuardGuard } from './recuiter-auth-guard.guard';

describe('recuiterAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => recuiterAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
