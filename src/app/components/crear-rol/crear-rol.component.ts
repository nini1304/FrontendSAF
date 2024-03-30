import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {RolesService} from "../../service/roles.service";

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent {
  rolForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private fb: FormBuilder,private rolesService: RolesService){
    this.rolForm = this.fb.group({
      rol: new FormControl('', [Validators.required]),

    });
  }

  crearRol(){
    if (this.rolForm.valid) {
      this.rolesService.crearRol(this.rolForm.get('rol')?.value).subscribe({
        next: (data) => {
          console.log(data);
          alert('Rol guardado correctamente');
          location.reload();


        },error: (error: any) => {
          console.log(error);
          alert('Error al guardar rol');


        }

      });
    }else {
      alert('Formulario no valido');
    }


  }

}
