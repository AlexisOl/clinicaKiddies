import { Component } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';

@Component({
  selector: 'app-vista-general',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './vista-general.component.html',
  styleUrl: './vista-general.component.scss',
})
// darle el default
export default class VistaGeneralComponent {}
