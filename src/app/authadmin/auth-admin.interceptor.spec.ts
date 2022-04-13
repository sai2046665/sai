import { TestBed } from '@angular/core/testing';

import { AuthAdminInterceptor } from './auth-admin.interceptor';

describe('AuthAdminInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthAdminInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthAdminInterceptor = TestBed.inject(AuthAdminInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
