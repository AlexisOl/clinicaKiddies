import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilidadesService {
  readonly url = environment.URL + '/clinica';
  //creacion  de signal

  public imagen = signal('');

  constructor(private http: HttpClient) {
    this.getImagen();
  }

  public getImagen() {
    this.http
      .get(`${this.url}/obtnerImagenLogo`)
      .pipe(
        tap((elementos: any) => {
          this.imagen.set(elementos);
          console.log(elementos);
        })
      )
      .subscribe();
  }
}
