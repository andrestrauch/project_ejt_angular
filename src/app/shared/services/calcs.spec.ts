import { TestBed } from '@angular/core/testing';
import { Calcs } from './calcs';

describe('Calcs', () => {
  let service: Calcs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calcs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
