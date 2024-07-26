import {
  AfterViewInit,
  Component,
  OnInit,
  inject,
  input,
  signal,
} from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';
import { initFlowbite } from 'flowbite';
import { PersonasServicioService } from '../../services/personas.servicio.service';
import { pacientes } from '../../models/personas';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-usuario-especifico',
  standalone: true,
  imports: [HeaderComponent, DatePipe],
  templateUrl: './usuario-especifico.component.html',
  styleUrl: './usuario-especifico.component.scss',
})
export class UsuarioEspecificoComponent implements AfterViewInit, OnInit {
  // recibo elementos para el usuario
  pacienteFinal!: undefined | any;
  edad!: undefined | any;
  usuarioId = input<number>(0, { alias: 'id' });
  pacienteActual = inject(PersonasServicioService);

  // para que se ejecute despues de iniciar
  ngAfterViewInit(): void {
    initFlowbite();
  }

  ngOnInit(): void {
    this.pacienteActual
      .pacienteId(this.usuarioId())
      .subscribe((elementos: pacientes) => {
        this.pacienteFinal = elementos;
        console.log(this.pacienteFinal);
      });

    this.pacienteActual
      .edadPaciente(this.usuarioId())
      .subscribe((edad: number) => {
        this.edad = edad;
      });
    console.log(this.pacienteFinal, this.edad);
  }
}
