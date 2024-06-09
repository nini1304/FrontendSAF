import {Component, ViewChild} from '@angular/core';
import {MatDatepickerInput} from "@angular/material/datepicker";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
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
  options: String[] = [];
  options2: String[] = [];
  options3: String[] = [];
  options4: String[] = [];
  options5: String[] = [];
  options6: String[] = [];
  options7: String[] = [];

  myControl = new FormControl('', [Validators.required]);
  myControl2 = new FormControl('', [Validators.required]);
  myControl3 = new FormControl('', [Validators.required]);
  myControl4 = new FormControl('', [Validators.required]);
  myControl5 = new FormControl('', [Validators.required]);
  myControl6 = new FormControl('', [Validators.required]);
  myControl7 = new FormControl('', [Validators.required]);



  constructor(private formBuilder: FormBuilder, private activoservice: ActivosService,
              private fb: FormBuilder) {
    this.nuevoactivoForm = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required,this.nonNegativeValue]),
      descripcion: new FormControl('', [Validators.required]),
      calle: new FormControl('', [Validators.required]),
      avenida: new FormControl('', [Validators.required]),
      myControl: this.myControl,
      myControl2: this.myControl2,
      myControl3: this.myControl3,
      myControl4: this.myControl4,
      myControl5: this.myControl5,
      myControl6: this.myControl6,
      myControl7: this.myControl7,
      purchaseDate: ['', [Validators.required, this.dateNotInFuture]],

    });
  }



  ngOnInit() {
    this.activoservice.getTiposActivo().subscribe({
      next: (data: TipoactivoDto[]) => {
        console.log(data);
        this.tipoactivoDto = data;
        this.options = this.tipoactivoDto.map(tipo => tipo.nombre);

      }


    })
    this.activoservice.getMarcas().subscribe({
      next: (data: MarcasDto[]) => {
        console.log(data);
        this.marcasDto = data;
        this.options2 = this.marcasDto.map(marca => marca.nombre);

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


      }


    })
    this.activoservice.getCiudades(idemp).subscribe({
      next: (data: CiudadesDto[]) => {
        console.log(data);
        this.ciudadesDto = data;
        this.options4 = this.ciudadesDto.map(ciudad => ciudad.nombre);


      }


    })
    this.activoservice.getPersonal(idemp).subscribe({
      next: (data: PersonalDto[]) => {
        console.log(data);
        this.personalDto = data;
        this.options5 = this.personalDto.map(personal => personal.nombre);


      }


    })
    this.activoservice.getEstados(idemp).subscribe({
      next: (data: EstadosDto[]) => {
        console.log(data);
        this.estadosDto = data;
        this.options6 = this.estadosDto.map(estado => estado.nombre);


      }


    })
    this.activoservice.getCondicion().subscribe({
      next: (data: CondicionDto[]) => {
        console.log(data);
        this.condicionDto = data;
        this.options7 = this.condicionDto.map(condicion => condicion.nombre);


      }


    })

  }

  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }

  dateNotInFuture(control: AbstractControl): ValidationErrors | null {
    const inputDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset hours to compare only date parts
    if (inputDate > today) {
      return { futureDate: true };
    }
    return null;
  }

  nonNegativeValue(control: AbstractControl): ValidationErrors | null {
    if (control.value <= 0) {
      return { negativeValue: true };
    }
    return null;
  }
  guardarDatos() {
    if (this.nuevoactivoForm.valid) {
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
      const idempresa = localStorage.getItem('idempresa');
      // @ts-ignore
      const idemp = parseInt(idempresa);
      // @ts-ignore
      this.activoservice.registrarActivo(nombre, valor, fechaa, descripcion, tipo, marca, calle,avenida,bloque,ciudad, personal, estado, condicion,idemp,this.nombre) .subscribe({
        next: (data) => {
          console.log(data);
          alert('Activo registrado correctamente');
          window.location.href = '/lista-admin';


        },error: (error: any) => {
          console.log(error);
          alert('Error al registrar activo');


        }

      });


    }else {
      alert('Revise que los campos esten llenados correctamente');
    }





  }

}
