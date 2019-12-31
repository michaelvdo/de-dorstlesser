import { TestBed } from '@angular/core/testing';

import { SanitizeBeersService } from './sanitize-beers.service';

describe('SanitizeBeersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SanitizeBeersService = TestBed.get(SanitizeBeersService);
    expect(service).toBeTruthy();
  });
});
