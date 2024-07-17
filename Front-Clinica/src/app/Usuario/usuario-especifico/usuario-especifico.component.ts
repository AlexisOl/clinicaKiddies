import { Component } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';

@Component({
  selector: 'app-usuario-especifico',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './usuario-especifico.component.html',
  styleUrl: './usuario-especifico.component.scss',
})
export class UsuarioEspecificoComponent {}
