import { TestBed } from '@angular/core/testing';

import { FilsServiceService } from './fils-service.service';

describe('FilsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilsServiceService = TestBed.get(FilsServiceService);
    expect(service).toBeTruthy();
  });
});
