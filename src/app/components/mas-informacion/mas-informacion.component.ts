import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-mas-informacion',
  templateUrl: './mas-informacion.component.html',
  styleUrls: ['./mas-informacion.component.css']
})
export class MasInformacionComponent {
  constructor(public dialogRef: MatDialogRef<MasInformacionComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

}
