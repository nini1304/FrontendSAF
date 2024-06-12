import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseLUDto} from "../dto/ResponseLU.dto";
import {ResponseLAPPDto} from "../dto/ResponseLAPP.dto";

@Injectable({
  providedIn: 'root'
})
export class LuService {
  BACK_URL = environment.url;
  constructor(private http: HttpClient) {}

  public listarLogsU(): Observable<ResponseLUDto[]> {
    return this.http.get<ResponseLUDto[]>(`${this.BACK_URL}/api/v1/usuarios/logUsuarios`);
  }

  public listarLogsAPP(): Observable<ResponseLAPPDto[]> {
    return this.http.get<ResponseLAPPDto[]>(`${this.BACK_URL}/api/v1/activos-fijos-H/actFHLog`);
  }

  public registrarLogout(username:string): Observable<any> {
    const params = {
      username: username

    };
    return this.http.post<any>(`${this.BACK_URL}/api/v1/usuarios/logout`,null,{params:params});
  }

  public registrarIntentos(username:string, intentos:number): Observable<any> {
    const params = {
      user: username,
      intento: intentos


    };
    return this.http.post<any>(`${this.BACK_URL}/api/v1/usuarios/logIntentoUsuario`,null,{params:params});
  }





}
