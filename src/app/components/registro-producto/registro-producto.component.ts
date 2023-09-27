import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css'],
})
export class RegistroProductoComponent{

  formulario: FormGroup; // Declaración de FormGroup

  constructor() {
    this.formulario = new FormGroup({
      nombreActivo: new FormControl(''),
      precio: new FormControl(''),
      descripcion: new FormControl(''),
      fecha: new FormControl(''),
      ciudad: new FormControl(''),
      calle: new FormControl(''),
      avenida: new FormControl(''),
      bloque: new FormControl(''),
    });
  }
  
  disableSelect = new FormControl(false);

  datePicker!: MatDatepicker<Date>;

  // Define la función de filtro para deshabilitar fines de semana
  dateFilter: (date: Date) => boolean = (date: Date) => {
    const day = date.getDay();
    // Habilita solo días de lunes a viernes (0 = domingo, 6 = sábado)
    return day !== 0 && day !== 6;
  };
}
