import { TestBed } from '@angular/core/testing';

import { BaseAnimalService } from './base-animal.service';

describe('BaseAnimalService', () => {
  let service: BaseAnimalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseAnimalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
