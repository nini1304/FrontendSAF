import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, map, from} from 'rxjs';
import {environment} from "../../environments/environment";
import {ActivoFijoDto} from "../dto/activofijo.dto";
import {DepreciacionDto} from "../dto/depreciacion.dto";
import {UsuarioDto} from "../dto/usuario.dto";
import {HisdepreDto} from "../dto/hisdepre.dto";
@Injectable({
  providedIn: 'root'
})

export class ActivosService {
  BACK_URL = environment.url;

  constructor(private http: HttpClient) {}

  public getActivosFijos(idemp: number): Observable<ActivoFijoDto[]> {
    return this.http.get<ActivoFijoDto[]>(`${this.BACK_URL}/api/v1/activos-fijos-H/actFHEmpresa?idEmp=${idemp}`);
  }
  public getActivosDepreciados(mes:string, anio: number, idemp:number, user:string): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/actF?mes=${mes}&anio=${anio}&idEmp=${idemp}&username=${user}`);
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
  public getBloques(idemp:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/bloque?idEmp=${idemp}`);
  }
  public getCiudades(idemp:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/ciudad?idEmp=${idemp}`);
  }

  public getPersonal(idemp:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/personal?idEmp=${idemp}`);
  }
  public getEstados(idemp:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/activos-fijos/estado?idEmp=${idemp}`);
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
  public registrarActivo(nombre: string, valor:string, fecha:string, descripcion:string, tipo:number, marca: number, calle:string,avenida:string,bloque:number,ciudad:number,personal:number,estado:number,condicion:number,idemp:number,username:string):
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
      idemp: idemp,
      username:username
    };

    return this.http.post<any>(`${this.BACK_URL}/api/v1/activos-fijos/registrar?nombre=${nombre}&valor=${valor}&fechaCompra=${fecha}&descripcion=${descripcion}&tipoActivoId=${tipo}&marcaId=${marca}&calle=${calle}&avenida=${avenida}&bloqueId=${bloque}&ciudadId=${ciudad}&personalId=${personal}&estadoId=${estado}&condicionId=${condicion}&estado=true&idEmp=${idemp}&username=${username}`, body);
  }
  public registrarUsuario(nombre: string, username: string, password: string, empresa: number, rol: number):
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
    condicion:number,
    username:string
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
      condicion: condicion,
      username:username
    };
    console.log(body);
    return this.http.put<any>(`${this.BACK_URL}/api/v1/activos-fijos/actualizar/${id}?nombre=${nombre}&valor=${valor}&fechaCompra=${fecha}&descripcion=${descripcion}&tipoActivoId=${tipo}&marcaId=${marca}&calle=${calle}&avenida=${avenida}&bloqueId=${bloque}&ciudadId=${ciudad}&personalId=${personal}&estadoId=${estado}&condicionId=${condicion}&estado=true&username=${username}`, body);
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
  public generarReporteP(logo:string,user:string,empresa:string,depreciacion:DepreciacionDto[]): Observable<any> {
    return this.http.post<any>(`${this.BACK_URL}/api/v1/activos-fijos/pdf?nombreArchivo=activosFijos.pdf&imageUrl=${logo}&username=${user}&empresa=${empresa}`,depreciacion );

  }
  public generarReporteEH(hisdepre:HisdepreDto []): Observable<any> {
    return this.http.post<any>(`${this.BACK_URL}/api/v1/depreciados/excel?nombreArchivo=activosFijosH.xlsx`,hisdepre );

  }
  public generarReportePH(logo:string,user:string,empresa:string,hisdepre:HisdepreDto []): Observable<any> {
    return this.http.post<any>(`${this.BACK_URL}/api/v1/depreciados/pdf?nombreArchivo=activosFijosH.pdf&imageUrl=${logo}&username=${user}&empresa=${empresa}`,hisdepre );

  }
  public deleteActivo(id: number,username:string): Observable<any> {
    const body = {
      id: id,
      username:username
    };
    return this.http.put<any>(`${this.BACK_URL}/api/v1/activos-fijos/disable?id=${id}&username=${username}`,body );

  }
  public deleteUsuario(id: number): Observable<any> {
    const body = {
      id: id
    };
    return this.http.put<any>(`${this.BACK_URL}/api/v1/usuarios/borrar/${id}`,body );

  }
  public getEmpresas():Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/usuarios/empresa`);
  }
  public getHisFechas(idemp:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/depreciados/tiempo?idEmp=${idemp}`);
  }

  public getHisDepre(idemp:number, idfiltro:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/depreciados/actD?idEmp=${idemp}&idTie=${idfiltro}`);
  }


}

