import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';
import { UtilidadesService } from '../../services/utilidades.service';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  enfermedades,
  medicamentos,
  vacunas_faltantes,
} from '../../models/diagnostico';
@Component({
  selector: 'app-primera-cita',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, FormsModule],
  templateUrl: './primera-cita.component.html',
  styleUrl: './primera-cita.component.scss',
})
export class PrimeraCitaComponent implements OnInit {
  utilidades = inject(UtilidadesService);
  url = this.utilidades.imagen();

  // para ver si toma medicamentos
  tomaMedicamentos: boolean = false;
  cantidadMedicamentos: medicamentos[] = [];
  nombreMedicamento!: string;
  // para ver la cantidad de enfermedades
  cantidadEnfermedades: enfermedades[] = [];
  nombreEnfermedad!: string;

  // para las vacunas
  nombreVacuna!: string;
  cantidadVacunas: vacunas_faltantes[] = [];

  onMedicamentoChange(value: string) {
    console.log('Seleccionado:', value);
    if (value == 'si') {
      this.tomaMedicamentos = true;
    } else if (value == 'no') {
      this.tomaMedicamentos = false;
    }
    // Realiza cualquier otra acción que necesites cuando cambie la selección
  }

  // para agregar mas enfermedades

  agregarEnfermedad() {
    const nuevaEnfermedad: enfermedades = {
      id: this.cantidadEnfermedades.length,
      nombre_enfermedad: this.nombreEnfermedad,
      diagnostico_general: undefined,
    };
    this.cantidadEnfermedades.push(nuevaEnfermedad);
    console.log(this.cantidadEnfermedades);

    this.nombreEnfermedad = '';
  }

  eliminarEnfermedades(valor: number, nombre: string) {
    this.cantidadEnfermedades = this.cantidadEnfermedades.filter(
      (elementos: enfermedades) =>
        !(nombre === elementos.nombre_enfermedad && valor === elementos.id)
    );
    console.log(this.cantidadEnfermedades);
  }

  // para agregar mas medicamentos

  agregarMedicamentos() {
    const nuevoMedicamento: medicamentos = {
      id: this.cantidadMedicamentos.length,
      nombre_medicamento: this.nombreMedicamento,
      diagnostico_general: undefined,
      dosis: 0,
      fecha_uso: null,
    };

    this.cantidadMedicamentos.push(nuevoMedicamento);
    this.nombreMedicamento = '';
  }

  // para eliminar medicamentos
  EliminarMedicamentos(valor: number, nombre: string) {
    this.cantidadMedicamentos = this.cantidadMedicamentos.filter(
      (elementos: medicamentos) =>
        !(nombre === elementos.nombre_medicamento && valor === elementos.id)
    );
    console.log(this.cantidadMedicamentos);
  }

  // para agregar mas vacunas

  agregarVacunas() {
    const nuevaVacuna: vacunas_faltantes = {
      id: this.cantidadMedicamentos.length,
      nombre_vacuna: this.nombreVacuna,
      diagnostico_general: undefined,
    };

    this.cantidadVacunas.push(nuevaVacuna);
    this.nombreVacuna = '';
  }

  // para eliminar vacunas
  eliminarVacunas(valor: number, nombre: string) {
    this.cantidadVacunas = this.cantidadVacunas.filter(
      (elementos: vacunas_faltantes) =>
        !(nombre === elementos.nombre_vacuna && valor === elementos.id)
    );
    console.log(this.cantidadVacunas);
  }

  ngOnInit(): void {
    //console.log(this.url);
  }
}
