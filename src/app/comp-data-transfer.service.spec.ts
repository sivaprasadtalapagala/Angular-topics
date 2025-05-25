import { TestBed } from '@angular/core/testing';

import { CompDataTransferService } from './comp-data-transfer.service';

describe('CompDataTransferService', () => {
  let service: CompDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
