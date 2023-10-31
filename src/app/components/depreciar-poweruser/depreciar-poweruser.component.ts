import { Component } from '@angular/core';
import {ActivosService} from "../../service/activos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-depreciar-poweruser',
  templateUrl: './depreciar-poweruser.component.html',
  styleUrls: ['./depreciar-poweruser.component.css']
})
export class DepreciarPoweruserComponent {
  mesSeleccionado: string = '';
  anioSeleccionado: string = '';
  constructor(private service: ActivosService, private router: Router) {
  }
  depreciar(){
    const anio = parseInt(this.anioSeleccionado);
    this.router.navigate(['/listadepre-poweruser', this.mesSeleccionado,anio]);


  }

}
