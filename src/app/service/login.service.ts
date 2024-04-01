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

  public verificarCorreo(usuario:string,correo:string): Observable<any> {
    const body = {
      usuario: usuario,
      correo: correo

    }
    return this.http.post<any>(`${this.BACK_URL}/api/v1/usuarios/verificarCorreo?username=${usuario}&correo=${correo}`, body);
  }

  public enviarCorreo( correoTo:string): Observable<string> {
    const body = {
      correoTo: correoTo


    }
    return this.http.put<string>(`${this.BACK_URL}/api/v1/usuarios/generarContrasena?correo=${correoTo}`, body);
  }

  public bloquearUsuario(usuario:string): Observable<any> {
    const body = {
      usuario: usuario

    }
    return this.http.put<any>(`${this.BACK_URL}/api/v1/usuarios/bloquear?username=${usuario}`, body);
  }


}
