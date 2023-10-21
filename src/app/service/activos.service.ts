import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map, from} from 'rxjs';
import {environment} from "../../environments/environment";
import {ActivoFijoDto} from "../dto/activofijo.dto";
@Injectable({
  providedIn: 'root'
})

export class ActivosService {
  BACK_URL = environment.url;

  constructor(private http: HttpClient) {}

  public getActivosFijos(): Observable<ActivoFijoDto[]> {
    return this.http.get<ActivoFijoDto[]>(`${this.BACK_URL}/api/v1/activos-fijos-H/actFH`);
  }
  public getListaActivosFijos(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/actF`);
  }

  public getTiposActivo(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/tipo`);
  }
  public getMarcas(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/marca`);
  }
  public getBloques(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/bloque`);
  }
  public getCiudades(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/ciudad`);
  }
  public getUbicaciones(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/ubicacion`);
  }
  public getPersonal(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/personal`);
  }
  public getEstados(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/estado`);
  }
  public getCondicion(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/cond`);
  }
  public registrarActivo(nombre: string, valor:string, fecha:string, descripcion:string, tipo:number, marca: number, calle:string,avenida:string,bloque:number,ciudad:number,personal:number,estado:number,condicion:number):
    Observable<any> {
    const body = {
      nombre: nombre,
      valor: valor,
      fecha: fecha,
      descripcion: descripcion,
      tipo: tipo,
      marca: marca,
      calle: calle,
      avenida: avenida,
      bloque: bloque,
      ciudad: ciudad,
      personal: personal,
      estado: estado,
      condicion: condicion
    };

    return this.http.post<any>(`${this.BACK_URL}/api/v1/activos-fijos/registrar?nombre=${nombre}&valor=${valor}&fechaCompra=${fecha}&descripcion=${descripcion}&tipoActivoId=${tipo}&marcaId=${marca}&calle=${calle}&avenida=${avenida}&bloqueId=${bloque}&ciudadId=${ciudad}&personalId=${personal}&estadoId=${estado}&condicionId=${condicion}&estado=true`, body);
  }

  obtenerActivo(id: number): Observable<any>{
    const url = `${this.BACK_URL}/api/v1/activos-fijos/obtener/${id}`;
    return this.http.get<any>(url);
  }
}

