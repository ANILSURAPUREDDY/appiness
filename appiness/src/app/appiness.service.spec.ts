import { TestBed } from '@angular/core/testing';

import { AppinessService } from './appiness.service';

describe('AppinessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppinessService = TestBed.get(AppinessService);
    expect(service).toBeTruthy();
  });
});
