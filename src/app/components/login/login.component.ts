import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginDto} from "../../dto/login.dto";
import {ActivosService} from "../../service/activos.service";
import {map, Observable, startWith} from "rxjs";
import {EmpresaDto} from "../../dto/empresa.dto";
import {TipoactivoDto} from "../../dto/tipoactivo.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginDto: LoginDto = {} as LoginDto;
  empresaDto: EmpresaDto[] = [];
  loginForm: FormGroup;
  // usuario = new FormControl('', [Validators.required]);

  myControl = new FormControl('');
  options: String[] = [];
  filteredOptions: Observable<String[]> | undefined;

  constructor(private formBuilder: FormBuilder,
              private fb: FormBuilder, private service: ActivosService) {
    this.loginForm = this.fb.group({
      myControl: [''],
      usuario: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required]),
    });

  }
  ngOnInit() {
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

  private _filter(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
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
          localStorage.setItem('idusuario', this.loginDto.idUsuario.toString());
          localStorage.setItem('nombre', this.loginDto.nombre);
          localStorage.setItem('idrol', this.loginDto.idRol.toString());
          localStorage.setItem('idempresa', this.loginDto.idEmpresa.toString());
          localStorage.setItem('nempresa', this.loginDto.nombreEmpresa);
          localStorage.setItem('logo', this.loginDto.logo);
          if (this.loginDto.idRol === 1){
            window.location.href = '/menu-poweruser';
          }else if (this.loginDto.idRol === 2){
            window.location.href = '/menu-user';

          }else if (this.loginDto.idRol === 3) {
            window.location.href = '/menu-admin';
          }else if (this.loginDto.idRol === 4) {
            window.location.href = '/menu-encargado';
          }

        }

      },error: (error: any) => {
        console.log(error);
        alert("Usuario o contraseña incorrectos/empresa incorrecta");
        location.reload();

      }

    });

  }


}
