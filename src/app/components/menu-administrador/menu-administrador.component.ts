import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent {

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
