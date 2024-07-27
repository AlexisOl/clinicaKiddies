import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, inject, signal } from '@angular/core';
import { pacientes, padres, sexo } from '../models/personas';
import { environment } from '../../environments/environment.development';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonasServicioService {
  public sexos = signal<sexo[]>([]);
  public pacientes = signal<pacientes[]>([]);
  readonly url = environment.URL + '/clinica';
  constructor(private http: HttpClient) {
    this.obtenerSexos();
    this.obtenerPacientes();
  }

  //obtiene los sexos
  public obtenerSexos() {
    this.http
      .get<sexo[]>(`${this.url}/todosSexos`)
      .pipe(tap((elementos: sexo[]) => this.sexos.set(elementos)))
      .subscribe();
  }

  //obtiene los pacientes
  public obtenerPacientes(): void {
    this.http
      .get<pacientes[]>(`${this.url}/todosPacientes`)
      .pipe(tap((elementos: pacientes[]) => this.pacientes.set(elementos)))
      .subscribe();
  }

  // ingresa un nuevo paciente
  public ingresoPaciente(paciente: pacientes, padre: padres) {
    this.http
      .post<pacientes[]>(`${this.url}/ingreso`, { paciente, padre })
      .subscribe();
  }

  //obtener paciente por id

  public pacienteId(id: number) {
    return this.http.get<pacientes>(`${this.url}/tipoPaciente/${id}`);
  }

  //obtener paciente edad

  public edadPaciente(id: number) {
    return this.http.get<number>(`${this.url}/edadActual/${id}`);
  }

  public tienePrimeraCita(id: number) {
    return this.http
      .get<number>(`${this.url}/tienePrimeraCita/${id}`)
      .subscribe();
  }
}
