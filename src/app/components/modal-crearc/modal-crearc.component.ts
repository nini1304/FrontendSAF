import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CiudadesDto} from "../../dto/ciudades.dto";
import {map, startWith} from "rxjs";
import {RiesgosService} from "../../service/riesgos.service";

@Component({
  selector: 'app-modal-crearc',
  templateUrl: './modal-crearc.component.html',
  styleUrls: ['./modal-crearc.component.css']
})
export class ModalCrearcComponent {
  controlForm: FormGroup;
  riesgoResidual: number = 0;
  nivelRiesgoResidual: string = '';

  constructor(private service: RiesgosService,private fb: FormBuilder,public dialogRef: MatDialogRef<ModalCrearcComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    this.controlForm = this.fb.group({
      ci: [''],
      tipo: [''],
      nivel: [''],
      frecuencia: [''],
      probabilidad2: [0],
      impacto2: [0]
    });
    console.log(data);


  }

  ngOnInit(): void {
    this.controlForm.get('probabilidad2')!.valueChanges.subscribe(() => {
      this.calculateRisk();
    });

    this.controlForm.get('impacto2')!.valueChanges.subscribe(() => {
      this.calculateRisk();
    });
  }

  calculateRisk(): void {
    const probabilidad = this.controlForm.get('probabilidad2')!.value;
    const impacto = this.controlForm.get('impacto2')!.value;

    this.riesgoResidual = probabilidad * impacto;

    if (this.riesgoResidual >= 1 && this.riesgoResidual <= 4) {
      this.nivelRiesgoResidual = 'Bajo';
    } else if (this.riesgoResidual >= 5 && this.riesgoResidual <= 9) {
      this.nivelRiesgoResidual = 'Moderado';
    } else if (this.riesgoResidual >= 10 && this.riesgoResidual <= 16) {
      this.nivelRiesgoResidual = 'Alto';
    } else if (this.riesgoResidual >= 20 && this.riesgoResidual <= 25) {
      this.nivelRiesgoResidual = 'Extremo';
    } else {
      this.nivelRiesgoResidual = '';
    }
  }

  guardarRiesgo(){

    console.log(this.data.ai,this.data.av,this.data.consecuencia,this.data.probabilidad1, this.data.impacto1,this.data.ri,this.data.nr,this.data.tratamiento,this.controlForm.get('ci')?.value,this.controlForm.get('tipo')?.value,this.controlForm.get('nivel')?.value,this.controlForm.get('frecuencia')?.value,this.controlForm.get('probabilidad2')?.value,this.controlForm.get('impacto2')?.value,this.riesgoResidual,this.nivelRiesgoResidual);


    this.service.registrarRiesgo(this.data.ai,this.data.av,this.data.consecuencia,this.data.probabilidad1, this.data.impacto1,this.data.ri,this.data.nr,this.data.tratamiento,this.controlForm.get('ci')?.value,this.controlForm.get('tipo')?.value,this.controlForm.get('nivel')?.value,this.controlForm.get('frecuencia')?.value,this.controlForm.get('probabilidad2')?.value,this.controlForm.get('impacto2')?.value,this.riesgoResidual,this.nivelRiesgoResidual ).subscribe({

      next: (data) => {
        if(data){
          alert("Riesgo registrado correctamente");
          this.dialogRef.close();
        }

      }


    })
  }

}
