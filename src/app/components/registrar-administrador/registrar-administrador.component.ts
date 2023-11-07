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

@Component({
  selector: 'app-registrar-administrador',
  templateUrl: './registrar-administrador.component.html',
  styleUrls: ['./registrar-administrador.component.css']
})
export class RegistrarAdministradorComponent {
  @ViewChild(MatDatepickerInput) datepickerInput: MatDatepickerInput<Date> | undefined;

  nombre = localStorage.getItem('nombre');

  nuevoactivoForm: FormGroup;
  tipoactivoDto: TipoactivoDto[] = [];
  marcasDto: MarcasDto[] = [];
  bloquesDto: BloquesDto[] = [];
  ciudadesDto: CiudadesDto[] = [];
  personalDto: PersonalDto[] = [];
  estadosDto: EstadosDto[] = [];
  condicionDto: CondicionDto[] = [];

  myControl = new FormControl('');
  options: String[] = [];
  filteredOptions: Observable<String[]> | undefined;
  myControl2 = new FormControl('');
  options2: String[] = [];
  filteredOptions2: Observable<String[]> | undefined;
  myControl3 = new FormControl('');
  options3: String[] = [];
  filteredOptions3: Observable<String[]> | undefined;
  myControl4 = new FormControl('');
  options4: String[] = [];
  filteredOptions4: Observable<String[]> | undefined;
  myControl5 = new FormControl('');
  options5: String[] = [];
  filteredOptions5: Observable<String[]> | undefined;
  myControl6 = new FormControl('');
  options6: String[] = [];
  filteredOptions6: Observable<String[]> | undefined;
  myControl7 = new FormControl('');
  options7: String[] = [];
  filteredOptions7: Observable<String[]> | undefined;



  constructor(private formBuilder: FormBuilder, private activoservice: ActivosService,
              private fb: FormBuilder) {
    this.nuevoactivoForm = this.fb.group({
      nombre: [''],
      valor: [''],
      descripcion: [''],
      calle: [''],
      avenida: [''],
      myControl: [''],
      myControl2: [''],
      myControl3: [''],
      myControl4: [''],
      myControl5: [''],
      myControl6: [''],
      myControl7: [''],

    });
  }



  ngOnInit() {
    this.activoservice.getTiposActivo().subscribe({
      next: (data: TipoactivoDto[]) => {
        console.log(data);
        this.tipoactivoDto = data;
        this.options = this.tipoactivoDto.map(tipo => tipo.nombre);
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );

      }


    })
    this.activoservice.getMarcas().subscribe({
      next: (data: MarcasDto[]) => {
        console.log(data);
        this.marcasDto = data;
        this.options2 = this.marcasDto.map(marca => marca.nombre);
        this.filteredOptions2 = this.myControl2.valueChanges.pipe(
          startWith(''),
          map(value => this._filter2(value || '')),
        );

      }


    })
    this.activoservice.getBloques().subscribe({
      next: (data: BloquesDto[]) => {
        console.log(data);
        this.bloquesDto = data;
        this.options3 = this.bloquesDto.map(bloque => bloque.nombre);
        this.filteredOptions3 = this.myControl3.valueChanges.pipe(
          startWith(''),
          map(value => this._filter3(value || '')),
        );

      }


    })
    this.activoservice.getCiudades().subscribe({
      next: (data: CiudadesDto[]) => {
        console.log(data);
        this.ciudadesDto = data;
        this.options4 = this.ciudadesDto.map(ciudad => ciudad.nombre);
        this.filteredOptions4 = this.myControl4.valueChanges.pipe(
          startWith(''),
          map(value => this._filter4(value || '')),
        );

      }


    })
    this.activoservice.getPersonal().subscribe({
      next: (data: PersonalDto[]) => {
        console.log(data);
        this.personalDto = data;
        this.options5 = this.personalDto.map(personal => personal.nombre);
        this.filteredOptions5 = this.myControl5.valueChanges.pipe(
          startWith(''),
          map(value => this._filter5(value || '')),
        );

      }


    })
    this.activoservice.getEstados().subscribe({
      next: (data: EstadosDto[]) => {
        console.log(data);
        this.estadosDto = data;
        this.options6 = this.estadosDto.map(estado => estado.nombre);
        this.filteredOptions6 = this.myControl6.valueChanges.pipe(
          startWith(''),
          map(value => this._filter6(value || '')),
        );

      }


    })
    this.activoservice.getCondicion().subscribe({
      next: (data: CondicionDto[]) => {
        console.log(data);
        this.condicionDto = data;
        this.options7 = this.condicionDto.map(condicion => condicion.nombre);
        this.filteredOptions7 = this.myControl7.valueChanges.pipe(
          startWith(''),
          map(value => this._filter7(value || '')),
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
  private _filter3(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options3.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filter4(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options4.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filter5(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options5.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filter6(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options6.filter(option => option.toLowerCase().includes(filterValue));
  }
  private _filter7(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.options7.filter(option => option.toLowerCase().includes(filterValue));
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
    const nombre = this.nuevoactivoForm.get('nombre')?.value;
    const valor = this.nuevoactivoForm.get('valor')?.value;
    // @ts-ignore
    const fecha = this.datepickerInput.value;
    // @ts-ignore
    const fechaa = fecha.toDateString();
    const descripcion = this.nuevoactivoForm.get('descripcion')?.value;
    const tipo = this.tipoactivoDto.find((tipo: TipoactivoDto) => tipo.nombre === this.myControl.value)?.id;
    const marca = this.marcasDto.find((marca: MarcasDto) => marca.nombre === this.myControl2.value)?.id;
    const calle = this.nuevoactivoForm.get('calle')?.value;
    const avenida = this.nuevoactivoForm.get('avenida')?.value;
    const bloque = this.bloquesDto.find((bloque: BloquesDto) => bloque.nombre === this.myControl3.value)?.id;
    const ciudad = this.ciudadesDto.find((ciudad: CiudadesDto) => ciudad.nombre === this.myControl4.value)?.id;
    const personal = this.personalDto.find((personal: PersonalDto) => personal.nombre === this.myControl5.value)?.id;
    const estado = this.estadosDto.find((estado: EstadosDto) => estado.nombre === this.myControl6.value)?.id;
    const condicion = this.condicionDto.find((condicion: CondicionDto) => condicion.nombre === this.myControl7.value)?.id;
    // @ts-ignore
    this.activoservice.registrarActivo(nombre, valor, fechaa, descripcion, tipo, marca, calle,avenida,bloque,ciudad, personal, estado, condicion) .subscribe({
      next: (data) => {
        console.log(data);
        alert('Activo registrado correctamente');
        window.location.href = '/lista-poweruser';


      },error: (error: any) => {
        console.log(error);
        alert('Error al registrar activo');


      }

    });


  }

}
