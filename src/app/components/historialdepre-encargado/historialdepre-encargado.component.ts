import {Component, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {HisdepreDto} from "../../dto/hisdepre.dto";
import {HistfechaDto} from "../../dto/histfecha.dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ActivosService} from "../../service/activos.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MatOptionSelectionChange} from "@angular/material/core";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";

@Component({
  selector: 'app-historialdepre-encargado',
  templateUrl: './historialdepre-encargado.component.html',
  styleUrls: ['./historialdepre-encargado.component.css']
})
export class HistorialdepreEncargadoComponent {
  nombre = localStorage.getItem('nombre');
  logo= localStorage.getItem('logo');
  empresa = localStorage.getItem('nempresa');
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

    this.activoservice.generarReporteEH(this.hisdepreDto).subscribe({
      next: (data) => {
        console.log(data);
        alert('Reporte en Excel generado correctamente');



      },error: (error: any) => {
        console.log(error);
        alert('Reporte en Excel generado correctamente');


      }

    });
  }
  generarReporteP() {

    // @ts-ignore
    this.activoservice.generarReportePH(this.logo,this.nombre,this.empresa,this.hisdepreDto).subscribe({
      next: (data) => {
        console.log(data);
        alert('Reporte en PDF generado correctamente');



      },error: (error: any) => {
        console.log(error);
        alert('Reporte en PDF generado correctamente');


      }

    });
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
