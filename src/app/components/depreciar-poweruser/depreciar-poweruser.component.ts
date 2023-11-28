import {Component, Inject} from '@angular/core';
import {ActivosService} from "../../service/activos.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-depreciar-poweruser',
  templateUrl: './depreciar-poweruser.component.html',
  styleUrls: ['./depreciar-poweruser.component.css']
})
export class DepreciarPoweruserComponent {
  mesSeleccionado: string = '';
  anioSeleccionado: string = '';
  constructor(public dialogRef: MatDialogRef<DepreciarPoweruserComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private service: ActivosService, private router: Router) {
  }
  depreciar(){

    const confirmacion = confirm('¿Estás seguro de que deseas realizar la depreciacion? Recuerda que solo se puede realizar una vez por mes');
    if (confirmacion) {
      this.dialogRef.close();
      const anio = parseInt(this.anioSeleccionado);
      this.router.navigate(['/listadepre-poweruser', this.mesSeleccionado,anio]);
    }else {
      // Si el usuario cancela la eliminación, no se hace nada
      alert('Depreciacion cancelada por el usuario');
    }



  }

}
