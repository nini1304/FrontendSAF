import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map, from} from 'rxjs';
import {environment} from "../../environments/environment";
import {ActivoFijoDto} from "../dto/activofijo.dto";
import {DepreciacionDto} from "../dto/depreciacion.dto";
import {UsuarioDto} from "../dto/usuario.dto";
@Injectable({
  providedIn: 'root'
})

export class ActivosService {
  BACK_URL = environment.url;

  constructor(private http: HttpClient) {}

  public getActivosFijos(): Observable<ActivoFijoDto[]> {
    return this.http.get<ActivoFijoDto[]>(`${this.BACK_URL}/api/v1/activos-fijos-H/actFH`);
  }
  public getActivosDepreciados(mes:string, anio: number, idemp:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/actF?mes=${mes}&anio=${anio}&idEmp=${idemp}`);
  }
  public getListaActivosFijos(idemp:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/actF2?idEmp=${idemp}`);
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

  public getPersonal(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/personal`);
  }
  public getEstados(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/estado`);
  }
  public getCondicion(): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/cond`);
  }
  public getRoles(): Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/usuarios/rol`);
  }
  public getEmpresa(): Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/usuarios/empresa`);
  }
  public getListaUsuario(idemp:number): Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/usuarios/listaUsuario?idEmp=${idemp}`);
  }
  public registrarActivo(nombre: string, valor:string, fecha:string, descripcion:string, tipo:number, marca: number, calle:string,avenida:string,bloque:number,ciudad:number,personal:number,estado:number,condicion:number,idemp:number):
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
      condicion: condicion,
      idemp: idemp
    };

    return this.http.post<any>(`${this.BACK_URL}/api/v1/activos-fijos/registrar?nombre=${nombre}&valor=${valor}&fechaCompra=${fecha}&descripcion=${descripcion}&tipoActivoId=${tipo}&marcaId=${marca}&calle=${calle}&avenida=${avenida}&bloqueId=${bloque}&ciudadId=${ciudad}&personalId=${personal}&estadoId=${estado}&condicionId=${condicion}&estado=true&idEmp=${idemp}`, body);
  }
  public registrarUsuario(nombre: string, username: string, password: string, empresa: number , rol: number):
    Observable<any> {
    const body = {
      nombre: nombre,
      username: username,
      password: password,
      empresa: empresa,
      rol: rol
    };
                          // POST http://localhost:1234/api/v1/usuarios/registrar?nombre=Juan&username=juan.perez&password=1234&idRol=1&idEmpresa=1&estado=true
    return this.http.post<any>(`${this.BACK_URL}/api/v1/usuarios/registrar?nombre=${nombre}&username=${username}&password=${password}&idRol=${rol}&idEmpresa=${empresa}&estado=true`, body);
  }
  public actualizarUsuario(
    id: number,
    nombre: string,
    username: string,
    password: string,
    idRol: number,
  ): Observable<any> {
    const body = {
      nombre: nombre,
      username: username,
      password: password,
      idRol: idRol
    };
    console.log(body);
    return this.http.put<any>(`${this.BACK_URL}/api/v1/usuarios/actualizar/${id}?nombre=${nombre}&username=${username}&password=${password}&idRol=${idRol}`, body);
  }

  public actualizarActivo(
    id: number,
    nombre: string,
    valor:number,
    fecha:string,
    descripcion:string,
    tipo:number,
    marca: number,
    calle:string,
    avenida:string,
    bloque:number,
    ciudad:number,
    personal:number,
    estado:number,
    condicion:number
  ): Observable<any> {
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
    console.log(body);
    return this.http.put<any>(`${this.BACK_URL}/api/v1/activos-fijos/actualizar/${id}?nombre=${nombre}&valor=${valor}&fechaCompra=${fecha}&descripcion=${descripcion}&tipoActivoId=${tipo}&marcaId=${marca}&calle=${calle}&avenida=${avenida}&bloqueId=${bloque}&ciudadId=${ciudad}&personalId=${personal}&estadoId=${estado}&condicionId=${condicion}&estado=true`, body);
  }
  public login(usuario: string, contrasenia: string, idemp:number): Observable<any> {
    const url = `${this.BACK_URL}/api/v1/usuarios/login?user=${usuario}&password=${contrasenia}&empId=${idemp}`;
    const body = {
      usuario: usuario,
      contrasenia: contrasenia
    };
    return this.http.post<any>(url, body);
  }
  public generarReporteE(depreciacion:DepreciacionDto []): Observable<any> {
    return this.http.post<any>(`${this.BACK_URL}/api/v1/activos-fijos/excel?nombreArchivo=activosFijos.xlsx`,depreciacion );

  }
  public generarReporteP(depreciacion:DepreciacionDto[]): Observable<any> {
    return this.http.post<any>(`${this.BACK_URL}/api/v1/activos-fijos/pdf?nombreArchivo=activosFijos.pdf`,depreciacion );

  }
  public deleteActivo(id: number): Observable<any> {
    const body = {
      id: id
    };
    return this.http.put<any>(`${this.BACK_URL}/api/v1/activos-fijos/disable?id=${id}`,body );

  }
  public deleteUsuario(id: number): Observable<any> {
    const body = {
      id: id
    };
    return this.http.put<any>(`${this.BACK_URL}/api/v1/activos-fijos/disable?id=${id}`,body );

  }
  public getEmpresas():Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/usuarios/empresa`);
  }

}

