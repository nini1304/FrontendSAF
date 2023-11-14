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
    const anio = parseInt(this.anioSeleccionado);
    this.dialogRef.close();
    this.router.navigate(['/listadepre-poweruser', this.mesSeleccionado,anio]);


  }

}
