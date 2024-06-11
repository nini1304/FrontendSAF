import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-modal-crearc',
  templateUrl: './modal-crearc.component.html',
  styleUrls: ['./modal-crearc.component.css']
})
export class ModalCrearcComponent {
  controlForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.controlForm = this.fb.group({
      ci: [''],
      tipo: [''],
      nivel: [''],
      frecuencia: [''],
      probabilidad2: [''],
      impacto2: ['']
    });
  }

}
