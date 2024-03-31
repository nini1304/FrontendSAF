import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RolDto} from "../dto/rol.dto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BACK_URL = environment.url;
  constructor(private http: HttpClient) {}

  public verificarCorreo(correo:string): Observable<any> {
    const body = {
      correo: correo

    }
    return this.http.post<any>(`${this.BACK_URL}/api/v1/roles/listar`, body);
  }

  public enviarCorreo( correoTo:string, contrasena:string): Observable<any> {
    const body = {
      correoTo: correoTo,
      contrasena: contrasena

    }
    return this.http.post<any>(`${this.BACK_URL}/api/v1/roles/listar`, body);
  }

  public bloquearUsuario(usuario:string): Observable<any> {
    const body = {
      usuario: usuario

    }
    return this.http.post<any>(`${this.BACK_URL}/api/v1/roles/listar`, body);
  }


}
