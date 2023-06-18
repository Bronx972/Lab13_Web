import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ubicacion } from '../models/ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  url = 'http://localhost:4000/api/ubicacion/';

  constructor(private http: HttpClient) { 

  }

  getUbicacion(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteUbicacion(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUbicacion(ubicacion: Ubicacion): Observable<any> {
    return this.http.post(this.url, ubicacion);
  }

  viewUbicacion(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarUbicacion(id: string, ubicacion: Ubicacion): Observable<any> {
    return this.http.put(this.url + id, ubicacion);
  }

}
