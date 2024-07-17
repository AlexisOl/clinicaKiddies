import { TestBed } from '@angular/core/testing';

import { PersonasServicioService } from './personas.servicio.service';

describe('PersonasServicioService', () => {
  let service: PersonasServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonasServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
