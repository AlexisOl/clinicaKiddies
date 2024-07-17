import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEspecificoComponent } from './usuario-especifico.component';

describe('UsuarioEspecificoComponent', () => {
  let component: UsuarioEspecificoComponent;
  let fixture: ComponentFixture<UsuarioEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioEspecificoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
