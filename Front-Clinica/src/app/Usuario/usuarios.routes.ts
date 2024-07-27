import { Routes } from '@angular/router';
import VistaGeneralComponent from './vista-general/vista-general.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';
import { UsuarioEspecificoComponent } from './usuario-especifico/usuario-especifico.component';
import { PrimeraCitaComponent } from './primera-cita/primera-cita.component';
import { SeguimientoCitaComponent } from './seguimiento-cita/seguimiento-cita.component';

export const routes: Routes = [
  {
    path: '',
    component: VistaGeneralComponent,
  },
  {
    path: 'ingreso',
    component: RegistroPacientesComponent,
  },
  {
    path: 'pacientes',
    component: ListaPacientesComponent,
  },
  {
    path: ':id',
    component: UsuarioEspecificoComponent,
  },
  {
    path: 'primeraCita/:id',
    component: PrimeraCitaComponent,
  },
  {
    path: 'seguimiento/:id',
    component: SeguimientoCitaComponent,
  },
];

export default routes;
