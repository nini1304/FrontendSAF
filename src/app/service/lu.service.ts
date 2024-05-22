import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseLUDto} from "../dto/ResponseLU.dto";

@Injectable({
  providedIn: 'root'
})
export class LuService {
  BACK_URL = environment.url;
  constructor(private http: HttpClient) {}

  public listarLogsU(): Observable<ResponseLUDto[]> {
    return this.http.get<ResponseLUDto[]>(`${this.BACK_URL}/api/v1/roles/listar`);
  }

}
