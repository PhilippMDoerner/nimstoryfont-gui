import { TestBed } from '@angular/core/testing';

import { FormlyService } from './formly-service.service';

describe('FormlyServiceService', () => {
  let service: FormlyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormlyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
