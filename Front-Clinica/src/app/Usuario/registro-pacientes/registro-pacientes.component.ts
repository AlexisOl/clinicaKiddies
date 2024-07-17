import { Component, Inject, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';
import { PersonasServicioService } from '../../services/personas.servicio.service';
import { pacientes, padres, sexo } from '../../models/personas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-pacientes',
  standalone: true,
  imports: [HeaderComponent, FormsModule],
  templateUrl: './registro-pacientes.component.html',
  styleUrl: './registro-pacientes.component.scss',
})
export class RegistroPacientesComponent implements OnInit {
  // elementos de ingreso
  // padre
  nombre!: string;
  ocupacion!: string;
  edad!: number;
  telefono!: number;

  //paciente
  nombrePaciente!: string;
  sexo!: number;
  fecha_nacimiento!: Date;
  escolaridad!: string;
  direccion!: string;
  // inyectar
  servicio = inject(PersonasServicioService);
  opcionesSexo = this.servicio.sexos;

  generacionIngreso() {
    const nuevoPadre: padres = {
      nombre: this.nombre,
      edad: this.edad,
      ocupacion: this.ocupacion,
      telefono: this.telefono,
      id: 0,
    };

    let nuevoPaciente: pacientes = {
      direccion: this.direccion,
      escolaridad: this.escolaridad,
      fecha_nacimiento: this.fecha_nacimiento,
      nombre: this.nombrePaciente,
      sexo: this.sexo,
      id: 0,
      id_padre: 0,
      fecha_ingreso: undefined,
    };

    this.servicio.ingresoPaciente(nuevoPaciente, nuevoPadre);
  }
  ngOnInit(): void {}
}
