import {Component, Inject} from '@angular/core';
import {ActivosService} from "../../service/activos.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DepreciarPoweruserComponent} from "../depreciar-poweruser/depreciar-poweruser.component";

@Component({
  selector: 'app-depreciar-encargado',
  templateUrl: './depreciar-encargado.component.html',
  styleUrls: ['./depreciar-encargado.component.css']
})
export class DepreciarEncargadoComponent {
  mesSeleccionado: string = '';
  anioSeleccionado: string = '';
  constructor(public dialogRef: MatDialogRef<DepreciarPoweruserComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private service: ActivosService, private router: Router) {
  }
  depreciar(){
    const confirmacion = confirm('¿Estás seguro de que deseas realizar la depreciacion? Recuerda que solo se puede realizar una vez por mes');
    if (confirmacion) {
      this.dialogRef.close();
      const anio = parseInt(this.anioSeleccionado);
    this.router.navigate(['/listadepre-encargado', this.mesSeleccionado,anio]);
    }else {
      // Si el usuario cancela la eliminación, no se hace nada
      alert('Depreciacion cancelada por el usuario');
    }


  }

}
