import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { CondicionDto } from 'src/app/dto/condicion.dto';
import { EstadosDto } from 'src/app/dto/estados.dto';
import { MarcasDto } from 'src/app/dto/marcas.dto';
import { PersonalDto } from 'src/app/dto/personal.dto';
import { TipoactivoDto } from 'src/app/dto/tipoactivo.dto';
import { ActivosService } from 'src/app/service/activos.service';
import { Observable, map, startWith } from 'rxjs';
import { CiudadesDto } from 'src/app/dto/ciudades.dto';
import { BloquesDto } from 'src/app/dto/bloques.dto';

@Component({
  selector: 'app-actualizacion-activos',
  templateUrl: './actualizacion-activos.component.html',
  styleUrls: ['./actualizacion-activos.component.css']
})
export class ActualizacionActivosComponent {
  @ViewChild(MatDatepickerInput) datepickerInput: MatDatepickerInput<Date> | undefined;

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

  activoForm: FormGroup;
  tipoactivoDto: TipoactivoDto[] = [];
  marcasDto: MarcasDto[] = [];
  bloquesDto: BloquesDto[] = [];
  ciudadesDto: CiudadesDto[] = [];
  personalDto: PersonalDto[] = [];
  estadosDto: EstadosDto[] = [];
  condicionDto: CondicionDto[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private activoservice: ActivosService,
    private route: ActivatedRoute,
  ) {
    this.activoForm = this.formBuilder.group({
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
   this.route.params.subscribe(params =>{
    const id = params['id'];
    this.cargarDatosActivo(id);
   });
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

  cargarDatosActivo(id: number){
    this.activoservice.obtenerActivo(id).subscribe({
      next: (data: any) => {
        this.activoForm.setValue({
          nombre: data.nombre,
          valor: data.valor,
          descripcion: data.descripcion,
          tipo: data.tipo,
          marca: data.marca,
          ubicacion: data.ubicacion,
          personal: data.personal,
          estado: data.estado,
          condicion: data.condicion,
          calle: data.calle,
          avenida: data.avenida,
          bloque: data.bloque,
          ciudad: data.ciudad,
          fecha: data.fechaCompra
        })
      }
    })
  }

  actualizarActivo() {
    // Obtener el ID del activo a actualizar de la URL
    const nombre = this.activoForm.get('nombre')?.value;
    const valor = this.activoForm.get('valor')?.value;
    const descripcion = this.activoForm.get('descripcion')?.value;
    const tipo = this.activoForm.get('tipo')?.value;
    const marca = this.activoForm.get('marca')?.value;
    const ubicacion = this.activoForm.get('ubicacion')?.value;
    const personal = this.activoForm.get('personal')?.value;
    const estado = this.activoForm.get('estado')?.value;
    const condicion = this.activoForm.get('condicion')?.value;
    const calle = this.activoForm.get('calle')?.value;
    const avenida = this.activoForm.get('avenida')?.value;
    const bloque = this.activoForm.get('bloque')?.value;
    const ciudad = this.activoForm.get('ciudad')?.value;
    const fecha = this.activoForm.get('fecha')?.value;


    this.route.params.subscribe(params =>{
      const id = params['id'];
      this.activoservice.actualizarActivo(id, nombre, valor, fecha, descripcion, tipo, marca, calle, avenida, bloque, ciudad, personal, estado, condicion).subscribe({
        next: (data) => {
          console.log(data);
        }
      })
    })
  }
}
