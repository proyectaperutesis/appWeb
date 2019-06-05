import { TestBed } from '@angular/core/testing';

import { ProyectoLeyService } from './proyecto-ley.service';

describe('ProyectoLeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectoLeyService = TestBed.get(ProyectoLeyService);
    expect(service).toBeTruthy();
  });
});
