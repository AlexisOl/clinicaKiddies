import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeraCitaComponent } from './primera-cita.component';

describe('PrimeraCitaComponent', () => {
  let component: PrimeraCitaComponent;
  let fixture: ComponentFixture<PrimeraCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeraCitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeraCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
