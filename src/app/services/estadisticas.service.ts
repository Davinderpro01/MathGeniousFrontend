import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstadisticasService {
  constructor(private http: HttpClient) {}

  obtenerHistorialSesiones(userId: string): Observable<any> {
    const url = `http://localhost:3000/obtener-estadisticas/${userId}`;
    return this.http.get(url);
  }

  guardarSesionHistorial(userId: string, sessionData: any): Observable<any> {
    const url = `http://localhost:3000/guardar-sesion-historial`;
    return this.http.post(url, { userId, ...sessionData });
  }
}
