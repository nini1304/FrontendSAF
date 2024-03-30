import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActivoFijoDto} from "../dto/activofijo.dto";
import {RolDto} from "../dto/rol.dto";

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  BACK_URL = environment.url;
  constructor(private http: HttpClient) {}

  public obtenerRoles(): Observable<RolDto[]> {
    return this.http.get<RolDto[]>(`${this.BACK_URL}/api/v1/roles/listar`);
  }

  public borrarRol(id: number): Observable<RolDto[]> {
    return this.http.delete<RolDto[]>(`${this.BACK_URL}/api/v1/roles/borrar?id=${id}`);
  }

  public crearRol(rol: string): Observable<RolDto[]> {
    const body = {
      rol: rol

    }
    return this.http.post<RolDto[]>(`${this.BACK_URL}/api/v1/roles/registrar?rol=${rol}`, body);
  }


}
