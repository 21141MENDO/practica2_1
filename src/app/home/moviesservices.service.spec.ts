import { TestBed } from '@angular/core/testing';

import { MovieservicesService } from './moviesservices.service';

describe('MovieservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieservicesService = TestBed.get(MovieservicesService);
    expect(service).toBeTruthy();
  });
});
