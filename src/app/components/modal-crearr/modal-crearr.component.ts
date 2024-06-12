import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ModalSemaforoComponent} from "../modal-semaforo/modal-semaforo.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalCrearcComponent} from "../modal-crearc/modal-crearc.component";

@Component({
  selector: 'app-modal-crearr',
  templateUrl: './modal-crearr.component.html',
  styleUrls: ['./modal-crearr.component.css']
})
export class ModalCrearrComponent {
  riskForm: FormGroup;
  riesgoInherente: number = 0;
  nivelRiesgo: string = '';

  constructor(private fb: FormBuilder, public dialog: MatDialog, public d: MatDialog) {
    this.riskForm = this.fb.group({
      ai: new FormControl('', [Validators.required]),
      av: new FormControl('', [Validators.required]),
      consecuencia: new FormControl('', [Validators.required]),
      probabilidad1: new FormControl('', [Validators.required]),
      impacto1: new FormControl('', [Validators.required]),
      tratamiento: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.riskForm.get('probabilidad1')!.valueChanges.subscribe(() => {
      this.calculateRisk();
    });

    this.riskForm.get('impacto1')!.valueChanges.subscribe(() => {
      this.calculateRisk();
    });
  }

  calculateRisk(): void {
    const probabilidad = this.riskForm.get('probabilidad1')!.value;
    const impacto = this.riskForm.get('impacto1')!.value;

    this.riesgoInherente = probabilidad * impacto;

    if (this.riesgoInherente >= 1 && this.riesgoInherente <= 4) {
      this.nivelRiesgo = 'Bajo';
    } else if (this.riesgoInherente >= 5 && this.riesgoInherente <= 9) {
      this.nivelRiesgo = 'Moderado';
    } else if (this.riesgoInherente >= 10 && this.riesgoInherente <= 16) {
      this.nivelRiesgo = 'Alto';
    } else if (this.riesgoInherente >= 20 && this.riesgoInherente <= 25) {
      this.nivelRiesgo = 'Extremo';
    } else {
      this.nivelRiesgo = '';
    }
  }

  openDialog() : void {
    if(this.riskForm.valid){
      this.d.closeAll();
      const ai = this.riskForm.get('ai')!.value;
      const av = this.riskForm.get('av')!.value;
      const consecuencia = this.riskForm.get('consecuencia')!.value;
      const probabilidad1 = this.riskForm.get('probabilidad1')!.value;
      const impacto1 = this.riskForm.get('impacto1')!.value;
      const ri = this.riesgoInherente;
      const nr = this.nivelRiesgo;
      const tratamiento = this.riskForm.get('tratamiento')!.value;

      const dialogRef = this.dialog.open(ModalCrearcComponent, {
        data: {ai: ai, av: av, consecuencia: consecuencia, probabilidad1: probabilidad1, impacto1: impacto1, ri: ri, nr: nr, tratamiento: tratamiento}

      });

    }





  }

}
