import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../../utils/header/header.component';
import { UtilidadesService } from '../../services/utilidades.service';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-primera-cita',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage],
  templateUrl: './primera-cita.component.html',
  styleUrl: './primera-cita.component.scss',
})
export class PrimeraCitaComponent implements OnInit {
  utilidades = inject(UtilidadesService);
  url = this.utilidades.imagen();

  ngOnInit(): void {
    //console.log(this.url);
  }
}
