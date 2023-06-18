import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:4000/api/productos/';
  pdf = 'http://localhost:4000/api/generate-pdf/';

  constructor(private http: HttpClient) { 

  }

  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

   
  getPDF(): Observable<any> {
    return this.http.get(this.pdf, { responseType: 'blob' })
  }

  deleteProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto, imagen: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagen',imagen);
    formData.append('producto',producto.producto);
    formData.append('categoria',producto.categoria);
    formData.append('ubicacion',producto.ubicacion);
    formData.append('precio',producto.precio.toString());    
    return this.http.post(this.url,formData);
  }

  viewProducto(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + id, producto);
  }

}
