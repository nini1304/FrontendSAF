import { Component } from '@angular/core';
import {ActivosService} from "../../service/activos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-depreciar-encargado',
  templateUrl: './depreciar-encargado.component.html',
  styleUrls: ['./depreciar-encargado.component.css']
})
export class DepreciarEncargadoComponent {
  mesSeleccionado: string = '';
  anioSeleccionado: string = '';
  constructor(private service: ActivosService, private router: Router) {
  }
  depreciar(){
    const anio = parseInt(this.anioSeleccionado);
    this.router.navigate(['/listadepre-encargado', this.mesSeleccionado,anio]);


  }

}
