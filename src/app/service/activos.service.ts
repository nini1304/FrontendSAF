import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivoFijo } from '../modelos/activofijo';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivosService {
  
  constructor(private http: HttpClient) {}

  getActivos(): Observable<ActivoFijo[]>{
    return this.http.get<any>('/api/v1/activos-fijos').pipe(
      map(response => response.content)
    )
  }
}

