import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RiesgosService {
  BACK_URL = environment.url;
  constructor(private http: HttpClient) {}

  public registrarRiesgo(
    activo: string,
    amenaza: string,
    consecuencia: string,
    probabilidad: number,
    impacto: number,
    riesgoI: number,
    nivelR: string,
    tratamiento: string,
    control: string,
    tipo: string,
    nivel: string,
    frecuencia: string,
    probabilidadR: number,
    impactoR: number,
    riesgoResidual: number,
    nivelRR: string
  ): Observable<any> {
    const params = {
      activo: activo,
      amenaza: amenaza,
      consecuencia: consecuencia,
      probabilidad: probabilidad,
      impacto: impacto,
      riesgoI: riesgoI,
      nivelR: nivelR,
      tratamiento: tratamiento,
      control: control,
      tipo: tipo,
      nivel: nivel,
      frecuencia: frecuencia,
      probabilidadR: probabilidadR,
      impactoR: impactoR,
      riesgoResidual: riesgoResidual,
      nivelRR: nivelRR

    };

    return this.http.post<any>(`${this.BACK_URL}/api/v1/riesgo/registrar`, null, { params });
  }

  public listarRiesgos():Observable<any>{
    return this.http.get<any>(`${this.BACK_URL}/api/v1/riesgo/list`);
  }
}
