import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  constructor(private http: HttpClient) {}

  obtenerPreguntas(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/preguntas'); // Ajusta la ruta según tu configuración
  }

  crearPregunta(pregunta: any): Observable<any> {
    return this.http.post('http://localhost:3000/preguntas', pregunta); // Ajusta la ruta según tu configuración
  }

  editarPregunta(id: string, pregunta: any): Observable<any> {
    return this.http.put(`http://localhost:3000/preguntas/${id}`, pregunta); // Ajusta la ruta según tu configuración
  }

  eliminarPregunta(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/preguntas/${id}`); // Ajusta la ruta según tu configuración
  }

}
