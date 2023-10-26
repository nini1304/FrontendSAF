import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-poweruser',
  templateUrl: './menu-poweruser.component.html',
  styleUrls: ['./menu-poweruser.component.css']
})
export class MenuPoweruserComponent {

  nombre = localStorage.getItem('nombre');

  nempresa = localStorage.getItem('nempresa');
  logo = localStorage.getItem('logo');

  showFiller = false;
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }

}
