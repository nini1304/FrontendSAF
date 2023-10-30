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
  public getActivosDepreciados(mes:string, anio: number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/actF?mes=${mes}&anio=${anio}`);
  }
  public getListaActivosFijos(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/actF2`);
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
  public getRol(): Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/rol`);
  }
  public getEmpresa(): Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/empresa`);
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
  public registrarUsuario(nombre: string, username: string, password: string, empresa: number | undefined, rol: number | undefined):
    Observable<any> {
    const body = {
      nombre: nombre,
      username: username,
      password: password,
      empresa: empresa,
      rol: rol,
    };

    return this.http.post<any>(`${this.BACK_URL}/api/v1/activos-fijos/registrar?nombre=${nombre}&username=${username}&password=${password}&empresaId=${empresa}&rolId=${rol}`, body);
  }

  public actualizarActivo(
    id: number,
    nombre: string,
    valor: string,
    fecha: string,
    descripcion: string,
    tipo: string,
    marca: string,
    calle: string,
    avenida: string,
    bloque: string,
    ciudad: string,
    personal: string,
    estado: string,
    condicion: string
  ): Observable<any> {
    const url = `${this.BACK_URL}/api/v1/activos-fijos/actualizar/${id}`;

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
    return this.http.put<any>(url, body);
  }
  public login(usuario: string, contraseña: string): Observable<any> {
    const url = `${this.BACK_URL}/api/v1/usuarios/login?user=${usuario}&password=${contraseña}`;
    const body = {
      usuario: usuario,
      contraseña: contraseña
    };
    return this.http.post<any>(url, body);
  }
}

