import { TestBed } from '@angular/core/testing';

import { GithubTrendingService } from './github-trending.service';

describe('GithubTrendingService', () => {
  let service: GithubTrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubTrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
