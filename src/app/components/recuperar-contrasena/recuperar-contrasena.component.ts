import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {
  recuconForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,
              private fb: FormBuilder,private loginService: LoginService,private dialogRef: MatDialogRef<RecuperarContrasenaComponent>){
    this.recuconForm = this.fb.group({
      usuario: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),

    });
  }

  abrirLogin() {

    this.router.navigate(['']);

  }


  verificarCorreo(){
    if (this.recuconForm.valid) {
      this.loginService.verificarCorreo(this.recuconForm.get('usuario')?.value,this.recuconForm.get('correo')?.value).subscribe({
        next: (data) => {
          console.log(data);
          if (data == true){
            this.loginService.enviarCorreo(this.recuconForm.get('correo')?.value).subscribe({
              next: (data) => {
                console.log(data);
                alert('Error al enviar correo');


              },error: (error: any) => {
                alert('Su contraseña ha sido enviada a su correo');
                this.dialogRef.close();
                location.reload();



              }

            });


          }else{
            alert('No existe el correo en la base de datos');
            location.reload();
          }


        },error: (error: any) => {
          console.log(error);
          alert('Error al verificar el correo');


        }

      });
    }else {
      alert('Revise que los campos esten llenados correctamente');
    }


  }

}
