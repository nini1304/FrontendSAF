import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModalSemaforoComponent} from "../modal-semaforo/modal-semaforo.component";
import {MatDialog} from "@angular/material/dialog";
import {ModalCrearcComponent} from "../modal-crearc/modal-crearc.component";

@Component({
  selector: 'app-modal-crearr',
  templateUrl: './modal-crearr.component.html',
  styleUrls: ['./modal-crearr.component.css']
})
export class ModalCrearrComponent {
  riskForm: FormGroup;

  constructor(private fb: FormBuilder,public dialog: MatDialog) {
    this.riskForm = this.fb.group({
      ai: [''],
      av: [''],
      consecuencia: [''],
      probabilidad1: [''],
      impacto1: [''],
      ri: [''],
      tratamiento: [''],
      agregarControles: [false]
    });
  }

  onSubmit(): void {
    console.log(this.riskForm.value);
  }

  openDialog() : void {
    this.dialog.closeAll();

    const dialogRef = this.dialog.open(ModalCrearcComponent, {

    });

  }

}
