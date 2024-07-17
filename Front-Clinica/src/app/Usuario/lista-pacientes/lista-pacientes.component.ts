import { Component } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.scss',
})
export class ListaPacientesComponent {}
