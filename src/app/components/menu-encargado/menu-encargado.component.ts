import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-encargado',
  templateUrl: './menu-encargado.component.html',
  styleUrls: ['./menu-encargado.component.css']
})
export class MenuEncargadoComponent {
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
