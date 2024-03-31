import {Component, ViewChild} from '@angular/core';
import {MatDatepickerInput} from "@angular/material/datepicker";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ActivosService} from "../../service/activos.service";
import {EmpresaDto} from "../../dto/empresa.dto";
import {RolDto} from "../../dto/rol.dto";

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  nombre = localStorage.getItem('nombre');

  nuevoUsuarioForm: FormGroup;
  empresaDto: EmpresaDto[]=[];
  rolDto: RolDto[]=[];

  myControl = new FormControl('');
  options: String[] = [];
  filteredOptions: Observable<String[]> | undefined;
  myControl2 = new FormControl('');
  options2: String[] = [];
  filteredOptions2: Observable<String[]> | undefined;
  hidePassword = true;
  hidePassword2 = true;

  constructor(private formBuilder: FormBuilder, private activoservice: ActivosService,
              private fb: FormBuilder) {
    this.nuevoUsuarioForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(12), this.validatePassword]),
      passwordConfirmation: new FormControl('', [Validators.required]),
      myControl: new FormControl('', [Validators.required]),

    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit() {
    this.activoservice.getRoles().subscribe({
      next: (data: RolDto[]) => {
        console.log(data);
        this.rolDto = data;
        this.options = this.rolDto.map((rol) => rol.rol);
        console.log('holi'+this.rolDto.map((rol) => rol.idRol));
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
        console.log(this.options);

      }


    })
    this.activoservice.getEmpresa().subscribe({
      next: (data: EmpresaDto[]) => {
        console.log(data);
        this.empresaDto = data;
        this.options2 = this.empresaDto.map(empresa => empresa.nombre);
        this.filteredOptions2 = this.myControl2.valueChanges.pipe(
          startWith(''),
          map(value => this._filter2(value || '')),
        );
        console.log(this.options2);

      }


    })
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  togglePasswordVisibility2() {
    this.hidePassword2 = !this.hidePassword2;
  }

  passwordMatchValidator(group: FormGroup) {
    console.log('Validating password match');
    const password = group.get('password')?.value;
    const passwordConfirmation = group.get('passwordConfirmation')?.value;
    console.log('Password:', password);
    console.log('Password Confirmation:', passwordConfirmation);

    if (password === passwordConfirmation) {
      return null;
    } else {
      group.get('passwordConfirmation')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
  }

  validatePassword(control: any) {
    const password = control.value;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/; // Esta es la expresión regular para validar la contraseña

    if (!pattern.test(password)) {
      return { 'invalidPassword': true };
    }

    return null;
  }

  private _filter(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filter2(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options2.filter(option => option.toLowerCase().includes(filterValue));
  }

  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }
  guardarDatos() {
    const idempresa = localStorage.getItem('idempresa');
    // @ts-ignore
    const idemp = parseInt(idempresa);
    console.log('guardar datos')
    const nombre = this.nuevoUsuarioForm.get('nombre')?.value;
    const correo = this.nuevoUsuarioForm.get('correo')?.value;
    const username = this.nuevoUsuarioForm.get('username')?.value;
    const password = this.nuevoUsuarioForm.get('password')?.value;
    const rol = this.rolDto.find((rol:RolDto) => rol.rol === this.myControl.value)?.idRol;
    const bloqueado = false;

    // @ts-ignore
    this.activoservice.registrarUsuario(nombre, username, password, idemp, rol) .subscribe({
      next: (data) => {
        console.log(data);
        alert('Usuario registrado correctamente');
        window.location.href = '/listade-usuarios';

      },error: (error: any) => {
        console.log(error);
        alert('Error al registrar usuario');
      }
    });
  }
}




