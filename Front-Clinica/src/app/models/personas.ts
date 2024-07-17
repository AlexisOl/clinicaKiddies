export interface sexo {
  id: number;
  tipo: string;
}

export interface padres {
  id: number;
  nombre: string;
  ocupacion: string;
  edad: number;
  telefono: number;
}

export interface pacientes {
  id: number;
  nombre: string;
  sexo: number;
  fecha_nacimiento: Date;
  escolaridad: string;
  direccion: string;
  id_padre: number;
  fecha_ingreso: Date | undefined;
}
