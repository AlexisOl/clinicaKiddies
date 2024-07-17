import { Component } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';

@Component({
  selector: 'app-registro-pacientes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './registro-pacientes.component.html',
  styleUrl: './registro-pacientes.component.scss',
})
export class RegistroPacientesComponent {}
