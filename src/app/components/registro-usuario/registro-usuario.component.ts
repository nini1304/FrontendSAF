import {Component, ViewChild} from '@angular/core';
import {MatDatepickerInput} from "@angular/material/datepicker";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {TipoactivoDto} from "../../dto/tipoactivo.dto";
import {MarcasDto} from "../../dto/marcas.dto";
import {BloquesDto} from "../../dto/bloques.dto";
import {CiudadesDto} from "../../dto/ciudades.dto";
import {PersonalDto} from "../../dto/personal.dto";
import {EstadosDto} from "../../dto/estados.dto";
import {CondicionDto} from "../../dto/condicion.dto";
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

  constructor(private formBuilder: FormBuilder, private activoservice: ActivosService,
              private fb: FormBuilder) {
    this.nuevoUsuarioForm = this.fb.group({
      nombre: [''],
      username: [''],
      password: [''],
      myControl: [''],
      myControl2: [''],

    });
  }

  ngOnInit() {
    this.activoservice.getRol().subscribe({
      next: (data: RolDto[]) => {
        console.log(data);
        this.rolDto = data;
        this.options = this.rolDto.map(rol => rol.nombre);
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );

      }
    })
    this.activoservice.getEmpresa().subscribe({
      next: (data: EmpresaDto[]) => {
        console.log(data);
        this.empresaDto = data;
        this.options2 = this.empresaDto.map(empresa => empresa.nombre);
        this.filteredOptions2 = this.myControl2.valueChanges.pipe(
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
    console.log('guardar datos')
    const nombre = this.nuevoUsuarioForm.get('nombre')?.value;
    const username = this.nuevoUsuarioForm.get('username')?.value;
    const password = this.nuevoUsuarioForm.get('password')?.value;
    const empresa = this.empresaDto.find((empresa: EmpresaDto) => empresa.nombre === this.myControl2.value)?.id;
    const rol = this.rolDto.find((rol:RolDto) => rol.nombre === this.myControl.value)?.id;

    this.activoservice.registrarUsuario(nombre, username, password, empresa, rol) .subscribe({
      next: (data) => {
        console.log(data);
        alert('Activo registrado correctamente');



      },error: (error: any) => {
        console.log(error);
        alert('Error al registrar activo');


      }

    });


  }


}




