import { TestBed } from '@angular/core/testing';

import { ApiQuizzesService } from './api-quizzes.service';

describe('ApiQuizzesService', () => {
  let service: ApiQuizzesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiQuizzesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
