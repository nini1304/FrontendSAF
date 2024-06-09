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
  passwordCriteria = {
    minLength: false,
    hasUpperCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    isNotTrivial: false
  };

  constructor(private formBuilder: FormBuilder, private activoservice: ActivosService,
              private fb: FormBuilder) {
    this.nuevoUsuarioForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, this.passwordValidator.bind(this)]),
      passwordConfirmation: new FormControl('', [Validators.required]),
      myControl: new FormControl('', [Validators.required]),

    }, { validators: this.passwordMatchValidator });

    this.nuevoUsuarioForm.get('password')?.valueChanges.subscribe(value => {
      this.evaluatePassword(value);
    });
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

  getPasswordStrength() {
    const criteria = this.passwordCriteria;
    const fulfilledCriteria = Object.values(criteria).filter(value => value).length;
    return (fulfilledCriteria / Object.keys(criteria).length) * 100;
  }

  passwordValidator(control: FormControl) {
    const value = control.value;
    if (!value) return null;

    const passwordValid = this.passwordCriteria.minLength &&
      this.passwordCriteria.hasUpperCase &&
      this.passwordCriteria.hasNumber &&
      this.passwordCriteria.hasSpecialChar &&
      this.passwordCriteria.isNotTrivial;

    return passwordValid ? null : { passwordStrength: true };
  }

  evaluatePassword(value: string) {
    if (!value) {
      // Si el campo está vacío, todas las validaciones deben ser falsas
      this.passwordCriteria.minLength = false;
      this.passwordCriteria.hasUpperCase = false;
      this.passwordCriteria.hasNumber = false;
      this.passwordCriteria.hasSpecialChar = false;
      this.passwordCriteria.isNotTrivial = false;
      return;
    }

    // Si el campo no está vacío, realizamos las otras validaciones
    this.passwordCriteria.minLength = value.length >= 12;
    this.passwordCriteria.hasUpperCase = /[A-Z]/.test(value);
    this.passwordCriteria.hasNumber = /[0-9]/.test(value);
    this.passwordCriteria.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    this.passwordCriteria.isNotTrivial = !/^[a-zA-Z]+\.[a-zA-Z]+[0-9]{3,}$/.test(value);
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
    if (this.nuevoUsuarioForm.valid) {
      const idempresa = localStorage.getItem('idempresa');
      // @ts-ignore
      const idemp = parseInt(idempresa);
      console.log('guardar datos')
      const nombre = this.nuevoUsuarioForm.get('nombre')?.value;
      console.log('nombre',nombre)
      const correo = this.nuevoUsuarioForm.get('correo')?.value;
      console.log('correo',correo)
      const username = this.nuevoUsuarioForm.get('username')?.value;
      console.log('username',username)
      const password = this.nuevoUsuarioForm.get('password')?.value;
      console.log('password',password)
      const rol = this.rolDto.find((rol:RolDto) => rol.rol === this.nuevoUsuarioForm.get('myControl')?.value)?.idRol;
      console.log('rol',rol)

      // @ts-ignore
      this.activoservice.registrarUsuario(nombre, username, password,correo,rol,idemp) .subscribe({
        next: (data) => {
          console.log(data);
          alert('Usuario registrado correctamente');
          window.location.href = '/listade-usuarios';

        },error: (error: any) => {
          console.log(error);
          alert('Error al registrar usuario');
        }
      });
    }else {
      alert('Revise que los campos esten llenados correctamente');
    }

  }
}




