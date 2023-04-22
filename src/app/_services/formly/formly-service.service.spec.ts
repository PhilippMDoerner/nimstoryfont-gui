import { TestBed } from '@angular/core/testing';

import { FormlyServiceService } from './formly-service.service';

describe('FormlyServiceService', () => {
  let service: FormlyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormlyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
