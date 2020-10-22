import { TestBed } from '@angular/core/testing';

import { HandleRequestErrorService } from './handle-request-error.service';

describe('HandleRequestErrorService', () => {
  let service: HandleRequestErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleRequestErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
