import { pacientes } from './personas';

export interface enfermedades {
  id: number;
  nombre_enfermedad: string;
  diagnostico_general: infogeneral | undefined;
}

export interface infoespecifica {
  id: number;
  examen_fisico: string;
  examen_neurologico: string;
  notas: string;
}

export interface infogeneral {
  id: number;
  motivo_consulta: string;
  observacion: string;
  paciente: pacientes;
}

export interface analisisTalla {
  id: number;
  peso: number;
  talla: number;
  cc: number;
  pt: number;
  te: number;
  pe: number;
}

export interface analisisTalla {
  id: number;
  info_especifica: number;
  analisis_talla: analisisTalla;
}

export interface medicamentos {
  id: number;
  nombre_medicamento: string;
  dosis: number;
  fecha_uso: Date | null;
  diagnostico_general: infogeneral | undefined;
}

export interface vacunas_faltantes {
  id: number;
  nombre_vacuna: string;
  diagnostico_general: infogeneral | undefined;
}
