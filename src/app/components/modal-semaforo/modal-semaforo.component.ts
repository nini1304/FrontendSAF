import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-semaforo',
  templateUrl: './modal-semaforo.component.html',
  styleUrls: ['./modal-semaforo.component.css']
})
export class ModalSemaforoComponent {
  valorTermometro1 = '';
  valorTermometro2 = '';

  constructor(public dialogRef: MatDialogRef<ModalSemaforoComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.valorTermometro1 = this.data.nivelR;
    this.valorTermometro2 = this.data.nivelRR;
  }

  // cambiarValor(nuevoValor: string) {
  //   this.valorTermometro = nuevoValor;
  // }

}
