import { Component } from '@angular/core';

@Component({
  selector: 'app-manual-poweruser',
  templateUrl: './manual-poweruser.component.html',
  styleUrls: ['./manual-poweruser.component.css']
})
export class ManualPoweruserComponent {
  nombre = localStorage.getItem('nombre');
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }

}
