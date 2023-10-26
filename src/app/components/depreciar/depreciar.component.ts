import { Component } from '@angular/core';
import {ActivosService} from "../../service/activos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-depreciar',
  templateUrl: './depreciar.component.html',
  styleUrls: ['./depreciar.component.css']
})
export class DepreciarComponent {
  mesSeleccionado: string = '';
  anioSeleccionado: string = '';
  constructor(private service: ActivosService, private router: Router) {
  }
  depreciar(){
    const anio = parseInt(this.anioSeleccionado);
    this.router.navigate(['/lista-depre', this.mesSeleccionado,anio]);


  }

}
