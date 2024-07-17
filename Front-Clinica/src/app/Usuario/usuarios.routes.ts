import { Routes } from '@angular/router';
import VistaGeneralComponent from './vista-general/vista-general.component';
import { RegistroPacientesComponent } from './registro-pacientes/registro-pacientes.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

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
];

export default routes;
