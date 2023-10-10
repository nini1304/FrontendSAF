import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { CondicionDto } from 'src/app/dto/condicion.dto';
import { EstadosDto } from 'src/app/dto/estados.dto';
import { MarcasDto } from 'src/app/dto/marcas.dto';
import { PersonalDto } from 'src/app/dto/personal.dto';
import { TipoactivoDto } from 'src/app/dto/tipoactivo.dto';
import { UbicacionesDto } from 'src/app/dto/ubicaciones.dto';
import { ActivosService } from 'src/app/service/activos.service';
import { Observable } from 'rxjs';

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

  activoForm: FormGroup;
  tipoactivoDto: TipoactivoDto[] = [];
  marcasDto: MarcasDto[] = [];
  ubicacionesDto: UbicacionesDto[] = [];
  personalDto: PersonalDto[] = [];
  estadosDto: EstadosDto[] = [];
  condicionDto: CondicionDto[] = [];

  
  constructor(
    private formBuilder: FormBuilder,
    private activoservice: ActivosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.activoForm = this.formBuilder.group({
      nombre: [''],
      valor: [''],
      descripcion: [''],
      porcentaje: [''],
      tipo: [''],
      marca: [''],
      ubicacion: [''],
      personal: [''],
      estado: [''],
      condicion: [''],
    });
  }

  ngOnInit() {
    const activoId = this.route.snapshot.paramMap.get('id'); 
    if (activoId !== null) {
      // Convertir activoId a número si es una cadena válida
      const id = parseInt(activoId, 10);
      if(!isNaN(id)) {
        this.activoservice.obtenerActivo(id).subscribe((data) => {
          const activo = data; // Asegúrate de que los nombres de las propiedades coincidan con las propiedades del objeto activo
          this.activoForm.patchValue({
            nombre: activo.nombre,
            valor: activo.valor,
            descripcion: activo.descripcion,
            porcentaje: activo.porcentaje,
            tipo: activo.tipo,
            marca: activo.marca,
            ubicacion: activo.ubicacion,
            personal: activo.personal,
            estado: activo.estado,
            condicion: activo.condicion,
          });
        });
      }
    }

    // Cargar las opciones para los campos de selección como lo hacías anteriormente.
    this.activoservice.getTiposActivo().subscribe((data: TipoactivoDto[]) => {
      this.tipoactivoDto = data;
    });

    // Repetir el proceso para cargar las opciones para los otros campos de selección.

  }

  actualizarActivo() {
    const activoId = this.route.snapshot.paramMap.get('id'); // Obtener el ID del activo a actualizar de la URL
    const nombre = this.activoForm.get('nombre')?.value;
    const valor = this.activoForm.get('valor')?.value;
    const descripcion = this.activoForm.get('descripcion')?.value;
    const porcentaje = this.activoForm.get('porcentaje')?.value;
    const tipo = this.activoForm.get('tipo')?.value;
    const marca = this.activoForm.get('marca')?.value;
    const ubicacion = this.activoForm.get('ubicacion')?.value;
    const personal = this.activoForm.get('personal')?.value;
    const estado = this.activoForm.get('estado')?.value;
    const condicion = this.activoForm.get('condicion')?.value;
  }
}
