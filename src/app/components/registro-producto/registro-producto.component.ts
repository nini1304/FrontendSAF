import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDatepicker, MatDatepickerInput} from '@angular/material/datepicker';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import {TipoactivoDto} from "../../dto/tipoactivo.dto";
import {map, Observable, startWith} from "rxjs";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ActivosService} from "../../service/activos.service";
import {MarcasDto} from "../../dto/marcas.dto";
import {UbicacionesDto} from "../../dto/ubicaciones.dto";
import {PersonalDto} from "../../dto/personal.dto";
import {EstadosDto} from "../../dto/estados.dto";
import {CondicionDto} from "../../dto/condicion.dto";

@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.css'],
})
export class RegistroProductoComponent{
  @ViewChild(MatDatepickerInput) datepickerInput: MatDatepickerInput<Date> | undefined;

  nuevoactivoForm: FormGroup;
  tipoactivoDto: TipoactivoDto[] = [];
  marcasDto: MarcasDto[] = [];
  ubicacionesDto: UbicacionesDto[] = [];
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



  constructor(private formBuilder: FormBuilder, private activoservice: ActivosService,
              private fb: FormBuilder) {
    this.nuevoactivoForm = this.fb.group({
      nombre: [''],
      valor: [''],
      descripcion: [''],
      porcentaje: [''],
      myControl: [''],
      myControl2: [''],
      myControl3: [''],
      myControl4: [''],
      myControl5: [''],
      myControl6: [''],

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
    this.activoservice.getUbicaciones().subscribe({
      next: (data: UbicacionesDto[]) => {
        console.log(data);
        this.ubicacionesDto = data;
        this.options3 = this.ubicacionesDto.map(ubi => ubi.nombre);
        this.filteredOptions3 = this.myControl3.valueChanges.pipe(
          startWith(''),
          map(value => this._filter3(value || '')),
        );

      }


    })
    this.activoservice.getPersonal().subscribe({
      next: (data: PersonalDto[]) => {
        console.log(data);
        this.personalDto = data;
        this.options4 = this.personalDto.map(personal => personal.nombre);
        this.filteredOptions4 = this.myControl4.valueChanges.pipe(
          startWith(''),
          map(value => this._filter4(value || '')),
        );

      }


    })
    this.activoservice.getEstados().subscribe({
      next: (data: EstadosDto[]) => {
        console.log(data);
        this.estadosDto = data;
        this.options5 = this.estadosDto.map(estado => estado.nombre);
        this.filteredOptions5 = this.myControl5.valueChanges.pipe(
          startWith(''),
          map(value => this._filter5(value || '')),
        );

      }


    })
    this.activoservice.getCondicion().subscribe({
      next: (data: CondicionDto[]) => {
        console.log(data);
        this.condicionDto = data;
        this.options6 = this.condicionDto.map(condicion => condicion.nombre);
        this.filteredOptions6 = this.myControl6.valueChanges.pipe(
          startWith(''),
          map(value => this._filter6(value || '')),
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
  guardarDatos() {
    console.log('guardar datos')
    const nombre = this.nuevoactivoForm.value.nombre;
    const valor = this.nuevoactivoForm.value.valor;
    // @ts-ignore
    const fecha = this.datepickerInput.value;
    // @ts-ignore
    const fechaa = fecha.toString();
    const descripcion = this.nuevoactivoForm.value.descripcion;
    const porcentaje = this.nuevoactivoForm.value.porcentaje;
    const tipo = this.tipoactivoDto.find((tipo: TipoactivoDto) => tipo.nombre === this.nuevoactivoForm.value.myControl)?.id;
    const marca = this.marcasDto.find((marca: MarcasDto) => marca.nombre === this.nuevoactivoForm.value.myControl2)?.id;
    const ubicacion = this.ubicacionesDto.find((ubi: UbicacionesDto) => ubi.nombre === this.nuevoactivoForm.value.myControl3)?.id;
    const personal = this.personalDto.find((personal: PersonalDto) => personal.nombre === this.nuevoactivoForm.value.myControl4)?.id;
    const estado = this.estadosDto.find((estado: EstadosDto) => estado.nombre === this.nuevoactivoForm.value.myControl5)?.id;
    const condicion = this.condicionDto.find((condicion: CondicionDto) => condicion.nombre === this.nuevoactivoForm.value.myControl6)?.id;
    // @ts-ignore
    this.activoservice.registrarActivo(nombre, valor, fechaa, descripcion,porcentaje, tipo, marca, ubicacion, personal, estado, condicion)
      .subscribe(
        (respuesta) => {
          // La respuesta del servicio se maneja aquí
          console.log(respuesta);
          // Puedes realizar otras acciones después de un registro exitoso, como redireccionar a una página.
        },
        (error) => {
          // Manejo de errores
          console.error(error);
          // Puedes mostrar un mensaje de error al usuario si es necesario.
        }
      );


  }


}
