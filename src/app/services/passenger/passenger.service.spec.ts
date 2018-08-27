import {TestBed, inject} from '@angular/core/testing';
import {PassengerService} from './passenger.service';

describe('PassengerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassengerService]
    });
  });

  it('should be created', inject([PassengerService], (service: PassengerService) => {
    expect(service).toBeTruthy();
  }));
});
