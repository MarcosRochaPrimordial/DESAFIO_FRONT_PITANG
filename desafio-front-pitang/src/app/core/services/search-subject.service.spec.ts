import { TestBed } from '@angular/core/testing';

import { SearchSubjectService } from './search-subject.service';

describe('SearchSubjectService', () => {
  let service: SearchSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
