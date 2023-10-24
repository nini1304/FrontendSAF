import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginDto} from "../../dto/login.dto";
import {ActivosService} from "../../service/activos.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDto: LoginDto = {} as LoginDto;
  loginForm: FormGroup;
  // usuario = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder,
              private fb: FormBuilder, private service: ActivosService) {
    this.loginForm = this.fb.group({
      usuario: new FormControl('', [Validators.required]),
      contraseña: new FormControl('', [Validators.required]),
    });

  }
  ingresar() {
    const usuario = this.loginForm.get('usuario')?.value;
    const contraseña = this.loginForm.get('contraseña')?.value;
    this.service.login(usuario, contraseña).subscribe({
      next: (data: LoginDto) => {
        console.log(data);

        if(data){
          this.loginDto = data;
          localStorage.setItem('idusuario', this.loginDto.idUsuario.toString());
          localStorage.setItem('nombre', this.loginDto.nombre);
          localStorage.setItem('idrol', this.loginDto.idRol.toString());
          localStorage.setItem('idempresa', this.loginDto.idEmpresa.toString());
          localStorage.setItem('nempresa', this.loginDto.nombreEmpresa);
          localStorage.setItem('logo', this.loginDto.logo);
          if (this.loginDto.idRol === 1){
            window.location.href = '/menu-administrador';
          }else if (this.loginDto.idRol === 2){
            window.location.href = '/menu';

          }

        }

      },error: (error: any) => {
        console.log(error);
        alert("Usuario o contraseña incorrectos");

      }

    });

  }


}
