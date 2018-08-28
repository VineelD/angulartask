import { TestBed, inject } from '@angular/core/testing';

import { WinepriceService } from './wineprice.service';

describe('WinepriceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WinepriceService]
    });
  });

  it('should be created', inject([WinepriceService], (service: WinepriceService) => {
    expect(service).toBeTruthy();
  }));
});
