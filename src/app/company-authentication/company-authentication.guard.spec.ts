import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { companyAuthenticationGuard } from './company-authentication.guard';

describe('companyAuthenticationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => companyAuthenticationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
