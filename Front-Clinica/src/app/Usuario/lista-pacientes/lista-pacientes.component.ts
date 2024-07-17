import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';
import { PersonasServicioService } from '../../services/personas.servicio.service';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  standalone: true,
  imports: [HeaderComponent, DatePipe, RouterLink],
  templateUrl: './lista-pacientes.component.html',
  styleUrl: './lista-pacientes.component.scss',
})
export class ListaPacientesComponent {
  servicioPersonas = inject(PersonasServicioService);
  personasTotal = this.servicioPersonas.pacientes;
}
