import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.component.html',
  styleUrls: ['./recuperar-contrasena.component.css']
})
export class RecuperarContrasenaComponent {
  recuconForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,
              private fb: FormBuilder,private loginService: LoginService){
    this.recuconForm = this.fb.group({
      correo: new FormControl('', [Validators.required]),

    });
  }

  generarContrasena(): string {
    const longitud = 13;
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?-=[];,./';

    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
      const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      contrasena += caracterAleatorio;
    }

    return contrasena;
  }

  abrirLogin() {

    this.router.navigate(['']);

  }


  verificarCorreo(){
    if (this.recuconForm.valid) {
      this.loginService.verificarCorreo(this.recuconForm.get('correo')?.value).subscribe({
        next: (data) => {
          console.log(data);
          if (data == true){
            const contrasena = this.generarContrasena();
            this.loginService.enviarCorreo(this.recuconForm.get('correo')?.value, contrasena).subscribe({
              next: (data) => {
                console.log(data);
                alert('Correo enviado correctamente');
                this.abrirLogin();
              },error: (error: any) => {
                console.log(error);
                alert('Error al enviar correo');



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
      alert('Formulario no valido');
    }


  }

}
