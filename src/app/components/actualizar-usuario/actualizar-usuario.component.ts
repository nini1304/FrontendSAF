import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EmpresaDto} from "../../dto/empresa.dto";
import {RolDto} from "../../dto/rol.dto";
import {map, Observable, startWith} from "rxjs";
import {ActivosService} from "../../service/activos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent {
  updateMessage: string='';
  activoForm: FormGroup;

  rolDto: RolDto[]=[];

  myControl = new FormControl('');
  options: String[] = [];
  filteredOptions: Observable<String[]> | undefined;
  hidePassword = true;
  hidePassword2 = true;

  constructor(private formBuilder: FormBuilder, private activoservice: ActivosService, private router:Router,
              private route: ActivatedRoute) {
    this.activoForm = this.formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      myControl: new FormControl('', [Validators.required]),

    });
  }
  ngOnInit() {

    this.route.params.subscribe(params =>{
      const id = params['id'];
      const nombre = this.route.snapshot.queryParamMap.get('nombre');
      const username = this.route.snapshot.queryParamMap.get('username');
      const correo = this.route.snapshot.queryParamMap.get('correo');

      const rol = this.route.snapshot.queryParamMap.get('rol');
      console.log("prueba"+rol);
      this.activoForm.patchValue({

        nombre: nombre,
        correo: correo,
        username: username,
        myControl: rol
      });
    });
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
  }

  private _filter(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  validatePassword(control: any) {
    const password = control.value;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/; // Esta es la expresión regular para validar la contraseña

    if (!pattern.test(password)) {
      return { 'invalidPassword': true };
    }

    return null;
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
  togglePasswordVisibility2() {
    this.hidePassword2 = !this.hidePassword2;
  }

  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }
  actualizarUsuario() {
    if (this.activoForm.valid) {
      this.route.params.subscribe(params => {
        const id = params['id'];
        console.log(id);
        const nombre = this.activoForm.get('nombre')?.value;
        const correo = this.activoForm.get('correo')?.value;
        const username = this.activoForm.get('username')?.value;
        const rol = Number(this.rolDto.find((rol:RolDto) => rol.rol === this.activoForm.get('myControl')?.value)?.idRol);
        this.activoservice.actualizarUsuario(id, nombre, username,correo, rol) .subscribe({
          next: (data) => {
            console.log(data);
            alert('Usuario actualizado correctamente');
            this.router.navigate(['/listade-usuarios']);

          }, error: (error: any) => {
            console.log(error);
            alert('Error al actualizar usuario');
          }
        });
      });
    }else {
      alert('Revise que los campos esten llenados correctamente');
    }

  }
  regresar(){
    this.router.navigate(['/listade-usuarios']);
  }

}
