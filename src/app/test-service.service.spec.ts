import { TestBed } from '@angular/core/testing';

import { TestServiceService } from './test-service.service';

describe('TestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestServiceService = TestBed.get(TestServiceService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: TestServiceService = TestBed.get(TestServiceService);
    expect(service.add).toBeTruthy();
  });
  it('Checking for add function to be truthy', () => {
    const service: TestServiceService = TestBed.get(TestServiceService);
    expect(service.add).toBeTruthy();
  });
  it('Testing the add function', () => {
    const service: TestServiceService = TestBed.get(TestServiceService);
    expect(service.add(3,5)).toBe(8);
  });
});
