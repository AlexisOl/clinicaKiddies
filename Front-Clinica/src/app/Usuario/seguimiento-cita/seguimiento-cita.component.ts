import { Component, input } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';

@Component({
  selector: 'app-seguimiento-cita',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './seguimiento-cita.component.html',
  styleUrl: './seguimiento-cita.component.scss',
})
export class SeguimientoCitaComponent {
  //valor del usuario
  usuarioId = input<number>(0, { alias: 'id' });
}
