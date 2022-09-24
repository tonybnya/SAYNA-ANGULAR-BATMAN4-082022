import { TestBed } from '@angular/core/testing';

import { ApiCommentsService } from './api-comments.service';

describe('ApiCommentsService', () => {
  let service: ApiCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
