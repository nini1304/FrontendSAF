import { Component } from '@angular/core';
import {LuService} from "../../service/lu.service";
import {ResponseLUDto} from "../../dto/ResponseLU.dto";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-menu-poweruser',
  templateUrl: './menu-poweruser.component.html',
  styleUrls: ['./menu-poweruser.component.css']
})
export class MenuPoweruserComponent {

  nombre  = localStorage.getItem('nombre');


  nempresa = localStorage.getItem('nempresa');
  logo = localStorage.getItem('logo');

  showFiller = false;

  constructor(private luservice:LuService) { }
  borrarls(){

    // @ts-ignore
    this.luservice.registrarLogout(this.nombre).subscribe({
      next: (data: any) => {
        console.log(data);
        console.log("Se ha registrado el logout correctamente.");
        localStorage.clear();
        if (localStorage.length === 0) {
          console.log("LocalStorage ha sido limpiado correctamente.");
        } else {
          console.log("No se pudo limpiar el LocalStorage.");
        }


      },
      error: (error: any) => {
        console.log(error);
      }


    })


  }

}
