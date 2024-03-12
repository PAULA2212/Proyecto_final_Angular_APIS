import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  constructor(private http: HttpClient) { }

  // Método para obtener fotos de la API de Picsum
  getPhoto(): Observable<any> {
    return this.http.get("https://picsum.photos/v2/list?page=2&limit=100");
  }
}