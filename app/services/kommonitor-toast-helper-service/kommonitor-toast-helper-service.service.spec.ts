import { TestBed } from '@angular/core/testing';

import { KommonitorToastHelperServiceService } from './kommonitor-toast-helper-service.service';

describe('KommonitorToastHelperServiceService', () => {
  let service: KommonitorToastHelperServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KommonitorToastHelperServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
