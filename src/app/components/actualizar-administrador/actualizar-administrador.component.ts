import {Component, ViewChild} from '@angular/core';
import {MatDatepickerInput} from "@angular/material/datepicker";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {TipoactivoDto} from "../../dto/tipoactivo.dto";
import {MarcasDto} from "../../dto/marcas.dto";
import {BloquesDto} from "../../dto/bloques.dto";
import {CiudadesDto} from "../../dto/ciudades.dto";
import {PersonalDto} from "../../dto/personal.dto";
import {EstadosDto} from "../../dto/estados.dto";
import {CondicionDto} from "../../dto/condicion.dto";
import {ActivosService} from "../../service/activos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-actualizar-administrador',
  templateUrl: './actualizar-administrador.component.html',
  styleUrls: ['./actualizar-administrador.component.css']
})
export class ActualizarAdministradorComponent {
  updateMessage: string='';

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

  nombreu = localStorage.getItem('nombre');
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
    private router: Router
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
      const nombre = params['nombre'];
      const valor = params['valor'];
      const descripcion = params['descripcion'];
      const calle = params['calle'];
      const avenida = params['avenida'];
      this.activoForm.patchValue({
        nombre: nombre,
        valor: valor,
        descripcion: descripcion,
        calle: calle,
        avenida: avenida,
      });

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
    const idempresa = localStorage.getItem('idempresa');
    // @ts-ignore
    const idemp = parseInt(idempresa);
    this.activoservice.getBloques(idemp).subscribe({
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
    this.activoservice.getCiudades(idemp).subscribe({
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
    this.activoservice.getPersonal(idemp).subscribe({
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

  actualizarActivo() {
    // Obtener el ID del activo a actualizar de la URL
    const nombre = this.activoForm.get('nombre')?.value;
    const valor = this.activoForm.get('valor')?.value;
    const fechaa = this.datepickerInput?.value;
    const fecha = fechaa?.toDateString();
    const descripcion = this.activoForm.get('descripcion')?.value;
    const tipo = this.tipoactivoDto.find((tipo: TipoactivoDto) => tipo.nombre === this.myControl.value)?.id;
    const marca = this.marcasDto.find((marca: MarcasDto) => marca.nombre === this.myControl2.value)?.id;
    const calle = this.activoForm.get('calle')?.value;
    const avenida = this.activoForm.get('avenida')?.value;
    const bloque = this.bloquesDto.find((bloque: BloquesDto) => bloque.nombre === this.myControl3.value)?.id;
    const ciudad = this.ciudadesDto.find((ciudad: CiudadesDto) => ciudad.nombre === this.myControl4.value)?.id;
    const personal = this.personalDto.find((personal: PersonalDto) => personal.nombre === this.myControl5.value)?.id;
    const estado = this.estadosDto.find((estado: EstadosDto) => estado.nombre === this.myControl6.value)?.id;
    const condicion = this.condicionDto.find((condicion: CondicionDto) => condicion.nombre === this.myControl7.value)?.id;

    if (!nombre || isNaN(valor) || !fecha || !tipo || !marca || !calle || !bloque || !ciudad || !personal || !estado || !condicion) {
      this.updateMessage = 'Por favor complete todos los campos obligatorios.';
      return;
    }


    this.route.params.subscribe(params =>{
      const id = params['id'];
      console.log(id);
      // @ts-ignore
      this.activoservice.actualizarActivo(id, nombre, valor, fecha, descripcion, tipo, marca, calle, avenida, bloque, ciudad, personal, estado, condicion,this.nombreu).subscribe({
        next: (data) => {
          console.log(data);
          this.updateMessage = 'Activo actualizado con exito';
          alert(this.updateMessage);
          this.router.navigate(['/lista-admin']);
        },
        error: (error) => {
          console.log(error);
          this.updateMessage = 'Error al actualizar el activo';
        }

      })
    })
  }

  regresar(){
    this.router.navigate(['/lista-admin']);
  }

}
