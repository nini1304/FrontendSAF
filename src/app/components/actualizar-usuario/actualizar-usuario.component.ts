import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
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

  constructor(private formBuilder: FormBuilder, private activoservice: ActivosService, private router:Router,
              private route: ActivatedRoute) {
    this.activoForm = this.formBuilder.group({
      nombre: [''],
      username: [''],
      password: [''],
      myControl: ['']

    });
  }
  ngOnInit() {

    this.route.params.subscribe(params =>{
      const id = params['id'];
      const nombre = this.route.snapshot.queryParamMap.get('nombre');
      const username = this.route.snapshot.queryParamMap.get('username');
      const password = this.route.snapshot.queryParamMap.get('password');

      const rol = this.route.snapshot.queryParamMap.get('rol');
      console.log("prueba"+rol);
      this.activoForm.patchValue({

        nombre: nombre,
        username: username,
        password: password,
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

  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }
  actualizarUsuario() {
    console.log('guardar datos')
    const nombre = this.activoForm.get('nombre')?.value;
    const username = this.activoForm.get('username')?.value;
    const password = this.activoForm.get('password')?.value;
    console.log(this.rolDto.find((rol:RolDto) => rol.rol === this.myControl.value)?.idRol)
    const rol = this.rolDto.find((rol:RolDto) => rol.rol === this.myControl.value)?.idRol;

    if (!nombre || !username|| !password || !rol ) {
      this.updateMessage = 'Por favor complete todos los campos obligatorios.';
      return;
    }

    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);

      this.activoservice.actualizarUsuario(id, nombre, username, password, rol).subscribe({
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
  }
  regresar(){
    this.router.navigate(['/listade-usuarios']);
  }

}
