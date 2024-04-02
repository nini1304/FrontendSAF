import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CcService {
  BACK_URL = environment.url;
  constructor(private http: HttpClient) {}

  public cambiarContrasena(userId:number,contrasena:string,nuevaContrasena:string): Observable<any> {
    const params = {
      userId: userId,
      password: contrasena,
      newPassword: nuevaContrasena

    }
    return this.http.post<any>(`${this.BACK_URL}/api/v1/usuarios/cambiarContrasena`,null, { params: params });
  }
}
