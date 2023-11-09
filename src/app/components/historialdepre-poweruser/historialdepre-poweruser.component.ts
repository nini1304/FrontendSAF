import {Component, ViewChild} from '@angular/core';
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
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {HistfechaDto} from "../../dto/histfecha.dto";

@Component({
  selector: 'app-historialdepre-poweruser',
  templateUrl: './historialdepre-poweruser.component.html',
  styleUrls: ['./historialdepre-poweruser.component.css']
})
export class HistorialdeprePoweruserComponent {

  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<String[]> | undefined;
  nombre = localStorage.getItem('nombre');
  activoslistaDto: ActivoslistaDto[] = [];
  histfechaDto: HistfechaDto[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'valor', 'fecha', 'tipo', 'masinfo','acciones'];
  dataSource: MatTableDataSource<ActivoslistaDto> | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private activoservice: ActivosService, public dialog: MatDialog, private router: Router) {

  }
  ngAfterViewInit() {
    this.activoservice.getHisFechas().subscribe({
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
    // const idempresa = localStorage.getItem('idempresa');
    // // @ts-ignore
    // const idemp = parseInt(idempresa);
    // this.activoservice.getListaActivosFijos(idemp).subscribe({
    //   next: (data: ActivoslistaDto []) => {
    //     console.log(data);
    //     this.activoslistaDto = data;
    //     this.dataSource = new MatTableDataSource(this.activoslistaDto);
    //     // @ts-ignore
    //     this.dataSource.paginator = this.paginator;
    //
    //
    //
    //   }
    //
    //
    // })
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
