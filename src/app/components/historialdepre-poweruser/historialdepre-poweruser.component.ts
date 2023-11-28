import {Component, SimpleChanges, ViewChild} from '@angular/core';
import {DepreciacionDto} from "../../dto/depreciacion.dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivosService} from "../../service/activos.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";
import {ActivoslistaDto} from "../../dto/activoslista.dto";
import {DepreciarPoweruserComponent} from "../depreciar-poweruser/depreciar-poweruser.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {HistfechaDto} from "../../dto/histfecha.dto";
import {HisdepreDto} from "../../dto/hisdepre.dto";
import {BloquesDto} from "../../dto/bloques.dto";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatOptionSelectionChange} from "@angular/material/core";

@Component({
  selector: 'app-historialdepre-poweruser',
  templateUrl: './historialdepre-poweruser.component.html',
  styleUrls: ['./historialdepre-poweruser.component.css']
})
export class HistorialdeprePoweruserComponent {

  nombre = localStorage.getItem('nombre');
  dateForm: FormGroup;

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<String[]> | undefined;
  hisdepreDto: HisdepreDto[] = [];
  histfechaDto: HistfechaDto[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'valor', 'fecha', 'tipo', 'porcentaje','valord','valora','mesesr','autor','masinfo'];
  dataSource: MatTableDataSource<HisdepreDto> = new MatTableDataSource(this.hisdepreDto);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private activoservice: ActivosService, public dialog: MatDialog, private router: Router, private formBuilder: FormBuilder,
              private fb: FormBuilder) {
    this.dateForm = this.fb.group({
      myControl: [''],
    });



  }

  ngAfterViewInit() {
    const idempresa = localStorage.getItem('idempresa');
    // @ts-ignore
    const idemp = parseInt(idempresa);
    this.activoservice.getHisFechas(idemp).subscribe({
      next: (data: HistfechaDto []) => {
        console.log(data);
        this.histfechaDto = data;
        this.options = this.histfechaDto.map(fecha => fecha.mes + '-' + fecha.anio);
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );



      }


    })
  }

  getHistorialDepre(idfiltro:number) {
    const idempresa = localStorage.getItem('idempresa');
    // @ts-ignore
    const idemp = parseInt(idempresa);
    this.activoservice.getHisDepre(idemp,idfiltro).subscribe({
      next: (data: HisdepreDto []) => {
        console.log(data);
        this.hisdepreDto = data;
        this.dataSource = new MatTableDataSource(this.hisdepreDto);
        // @ts-ignore
        this.dataSource.paginator = this.paginator;



      }


    })

  }

  generarReporteE() {
    // // Si hay un filtro aplicado, guardar los datos filtrados
    // if (this.dataSource.filter) {
    //   this.datosGuardados = this.dataSource.filteredData;
    // } else {
    //   // Si no hay filtro, guardar todos los datos de la tabla
    //   this.datosGuardados = this.depreciacionDto;
    // }
    //
    // // Aquí puedes hacer lo que quieras con this.datosGuardados,
    // // como enviarlo a través de un servicio o realizar otras operaciones.
    // console.log('Datos guardados:', this.datosGuardados);
    // this.activoservice.generarReporteE(this.datosGuardados).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     alert('Reporte en Excel generado correctamente');
    //
    //
    //
    //   },error: (error: any) => {
    //     console.log(error);
    //     alert('Reporte en Excel generado correctamente');
    //
    //
    //   }
    //
    // });
  }
  generarReporteP() {
    // // Si hay un filtro aplicado, guardar los datos filtrados
    // if (this.dataSource.filter) {
    //   this.datosGuardados = this.dataSource.filteredData;
    // } else {
    //   // Si no hay filtro, guardar todos los datos de la tabla
    //   this.datosGuardados = this.depreciacionDto;
    // }
    //
    // // Aquí puedes hacer lo que quieras con this.datosGuardados,
    // // como enviarlo a través de un servicio o realizar otras operaciones.
    // console.log('Datos guardados:', this.datosGuardados);
    // // @ts-ignore
    // this.activoservice.generarReporteP(this.logo,this.nombre,this.empresa,this.datosGuardados).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     alert('Reporte en PDF generado correctamente');
    //
    //
    //
    //   },error: (error: any) => {
    //     console.log(error);
    //     alert('Reporte en PDF generado correctamente');
    //
    //
    //   }
    //
    // });
  }
  change(event: MatOptionSelectionChange) {
    const selectedValue = event.source.value;
    const idfecha = this.histfechaDto.find((fecha: HistfechaDto) => fecha.mes + '-' + fecha.anio === selectedValue)?.id;
    // @ts-ignore
    this.getHistorialDepre(idfecha);
  }
  openDialog(descripcion: string, marca: string, calle: string, avenida: string, bloque:string, ciudad: string,personal:string, estado:string, condicion:string) : void {
    const dialogRef = this.dialog.open(MasInformacionComponent, {
      // width: '250px',
      data: {descripcion: descripcion, marca: marca, calle: calle, avenida: avenida, bloque: bloque, ciudad: ciudad, personal: personal, estado: estado, condicion: condicion}
    });

  }
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }









}
