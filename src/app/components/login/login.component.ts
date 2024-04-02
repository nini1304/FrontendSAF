import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginDto} from "../../dto/login.dto";
import {ActivosService} from "../../service/activos.service";
import {map, Observable, startWith} from "rxjs";
import {EmpresaDto} from "../../dto/empresa.dto";
import {TipoactivoDto} from "../../dto/tipoactivo.dto";
import {Router} from "@angular/router";
import {CrearRolComponent} from "../crear-rol/crear-rol.component";
import {RecuperarContrasenaComponent} from "../recuperar-contrasena/recuperar-contrasena.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginService} from "../../service/login.service";
import {VidautilDto} from "../../dto/vidautil.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDto: LoginDto = {} as LoginDto;
  vidaUtil: VidautilDto = {} as VidautilDto;
  empresaDto: EmpresaDto[] = [];
  loginForm: FormGroup;
  // usuario = new FormControl('', [Validators.required]);

  myControl = new FormControl('');
  options: String[] = [];
  filteredOptions: Observable<String[]> | undefined;
  hidePassword = true;
  flag = false;

  constructor(private formBuilder: FormBuilder,private router: Router,public dialog: MatDialog,
              private fb: FormBuilder, private service: ActivosService,private loginService: LoginService) {
    this.loginForm = this.fb.group({
      myControl: [''],
      usuario: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required]),
    });

  }
  ngOnInit() {
    localStorage.setItem('intentos', '0');
    this.service.getEmpresas().subscribe({
      next: (data: EmpresaDto[]) => {
        console.log(data);
        this.empresaDto = data;
        this.options = this.empresaDto.map(emp => emp.nombre);
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );

      }


    })

  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  private _filter(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  abrirRecucon(){

    const dialogRef = this.dialog.open(RecuperarContrasenaComponent, {
      // width: '250px',
      // data: {descripcion: descripcion, marca: marca, calle: calle, avenida: avenida, bloque: bloque, ciudad: ciudad, personal: personal, estado: estado, condicion: condicion}
    });

  }
  ingresar() {
    const idempresa = this.empresaDto.find((emp: EmpresaDto) => emp.nombre === this.myControl.value)?.id;
    const usuario = this.loginForm.get('usuario')?.value;
    const contrasenia = this.loginForm.get('contrasenia')?.value;
    // @ts-ignore
    this.service.login(usuario, contrasenia,idempresa).subscribe({
      next: (data: LoginDto) => {
        console.log(data);
        if(data){
          this.loginDto = data;
          this.loginService.verificarVidaUtil(this.loginDto.idUsuario).subscribe({
            next: (data: VidautilDto) => {
              this.vidaUtil = data;
              if(!this.vidaUtil.vencido){
                if(this.vidaUtil.vidaUtil <= 10){
                  localStorage.setItem('idusuario', this.loginDto.idUsuario.toString());
                  localStorage.setItem('nombre', this.loginDto.nombre);
                  localStorage.setItem('idrol', this.loginDto.idRol.toString());
                  localStorage.setItem('idempresa', this.loginDto.idEmpresa.toString());
                  localStorage.setItem('nempresa', this.loginDto.nombreEmpresa);
                  localStorage.setItem('logo', this.loginDto.logo);
                  if (this.loginDto.idRol === 1 && !this.loginDto.bloqueado){
                    alert("Su contraseña expirará en "+this.vidaUtil.vidaUtil+" días");
                    window.location.href = '/menu-poweruser';
                  }else if (this.loginDto.idRol === 2 && !this.loginDto.bloqueado){
                    alert("Su contraseña expirará en "+this.vidaUtil.vidaUtil+" días");
                    window.location.href = '/menu-user';

                  }else if (this.loginDto.idRol === 3 && !this.loginDto.bloqueado) {
                    alert("Su contraseña expirará en "+this.vidaUtil.vidaUtil+" días");
                    window.location.href = '/menu-admin';
                  }else if (this.loginDto.idRol === 4 && !this.loginDto.bloqueado) {
                    alert("Su contraseña expirará en "+this.vidaUtil.vidaUtil+" días");
                    window.location.href = '/menu-encargado';
                  }else{
                    alert("Usuario bloqueado");
                    location.reload();
                  }
                }else{
                  localStorage.setItem('idusuario', this.loginDto.idUsuario.toString());
                  localStorage.setItem('nombre', this.loginDto.nombre);
                  localStorage.setItem('idrol', this.loginDto.idRol.toString());
                  localStorage.setItem('idempresa', this.loginDto.idEmpresa.toString());
                  localStorage.setItem('nempresa', this.loginDto.nombreEmpresa);
                  localStorage.setItem('logo', this.loginDto.logo);
                  if (this.loginDto.idRol === 1 && this.loginDto.bloqueado === false){
                    window.location.href = '/menu-poweruser';
                  }else if (this.loginDto.idRol === 2 && this.loginDto.bloqueado === false){
                    window.location.href = '/menu-user';

                  }else if (this.loginDto.idRol === 3 && this.loginDto.bloqueado === false) {
                    window.location.href = '/menu-admin';
                  }else if (this.loginDto.idRol === 4 && this.loginDto.bloqueado === false) {
                    window.location.href = '/menu-encargado';
                  }else{
                    alert("Usuario bloqueado");
                    location.reload();
                  }
                }

              }else{
                  alert("Contraseña expirada");
                  this.flag = true;


              }



            }

          });


        }

      },error: (error: any) => {
        console.log(error);
        let intentos = localStorage.getItem('intentos');
        intentos = String(Number(intentos) + 1);
        localStorage.setItem('intentos', intentos);
        console.log(intentos);
        let int = Number(localStorage.getItem('intentos'));

        if(int >= 3){
          this.loginService.bloquearUsuario(usuario).subscribe({
            next: (data: any) => {
              console.log(data);

            },error: (error: any) => {
              // console.log(error);
              // alert('Error al bloquear usuario');
              alert("Usuario bloqueado");
              this.flag = true;
            }

          });
        }else{
          alert("Usuario o contraseña incorrectos/empresa incorrecta");
          // location.reload();
        }


      }

    });

  }


}
