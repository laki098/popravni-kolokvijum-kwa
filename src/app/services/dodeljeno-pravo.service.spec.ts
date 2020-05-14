import { TestBed } from '@angular/core/testing';

import { DodeljenoPravoService } from './dodeljeno-pravo.service';

describe('DodeljenoPravoService', () => {
  let service: DodeljenoPravoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DodeljenoPravoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
