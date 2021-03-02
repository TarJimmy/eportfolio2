import { TestBed } from '@angular/core/testing';

import { ExperienceProService } from './experience-pro.service';

describe('ExperienceProService', () => {
  let service: ExperienceProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
