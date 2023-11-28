import {Component, ViewChild} from '@angular/core';
import {DepreciacionDto} from "../../dto/depreciacion.dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivosService} from "../../service/activos.service";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";

@Component({
  selector: 'app-listadepre-poweruser',
  templateUrl: './listadepre-poweruser.component.html',
  styleUrls: ['./listadepre-poweruser.component.css']
})
export class ListadeprePoweruserComponent {
  nombre = localStorage.getItem('nombre');
  logo= localStorage.getItem('logo');
  empresa = localStorage.getItem('nempresa');
  depreciacionDto: DepreciacionDto[] = [];
  datosGuardados: DepreciacionDto[] = [];

  mes: string = '';
  anio: number = 0;

  displayedColumns: string[] = ['id', 'nombre', 'valor', 'fecha', 'tipo', 'porcentaje','valord','valora','mesesr','masinfo'];
  dataSource: MatTableDataSource<DepreciacionDto>;

  // dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private activoservice: ActivosService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.depreciacionDto);

  }
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }
  openDialog(descripcion: string, marca: string, calle: string, avenida: string, bloque:string, ciudad: string,personal:string, estado:string, condicion:string) : void {
    const dialogRef = this.dialog.open(MasInformacionComponent, {
      // width: '250px',
      data: {descripcion: descripcion, marca: marca, calle: calle, avenida: avenida, bloque: bloque, ciudad: ciudad, personal: personal, estado: estado, condicion: condicion}
    });

  }

  generarReporteE() {
    // Si hay un filtro aplicado, guardar los datos filtrados
    if (this.dataSource.filter) {
      this.datosGuardados = this.dataSource.filteredData;
    } else {
      // Si no hay filtro, guardar todos los datos de la tabla
      this.datosGuardados = this.depreciacionDto;
    }

    // Aquí puedes hacer lo que quieras con this.datosGuardados,
    // como enviarlo a través de un servicio o realizar otras operaciones.
    console.log('Datos guardados:', this.datosGuardados);
    this.activoservice.generarReporteE(this.datosGuardados).subscribe({
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
    // Si hay un filtro aplicado, guardar los datos filtrados
    if (this.dataSource.filter) {
      this.datosGuardados = this.dataSource.filteredData;
    } else {
      // Si no hay filtro, guardar todos los datos de la tabla
      this.datosGuardados = this.depreciacionDto;
    }

    // Aquí puedes hacer lo que quieras con this.datosGuardados,
    // como enviarlo a través de un servicio o realizar otras operaciones.
    console.log('Datos guardados:', this.datosGuardados);
    // @ts-ignore
    this.activoservice.generarReporteP(this.logo,this.nombre,this.empresa,this.datosGuardados).subscribe({
      next: (data) => {
        console.log(data);
        alert('Reporte en PDF generado correctamente');



      },error: (error: any) => {
        console.log(error);
        alert('Reporte en PDF generado correctamente');


      }

    });
  }
  aceptar(){
    window.location.href = '/lista-poweruser';
  }


  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      // this.id = +params['id'];
      this.mes = params['mes'];
      this.anio = +params['anio'];
    });
    const idempresa = localStorage.getItem('idempresa');
    // @ts-ignore
    const idemp = parseInt(idempresa);
    // @ts-ignore
    this.activoservice.getActivosDepreciados(this.mes, this.anio,idemp,this.nombre).subscribe({
      next: (data: DepreciacionDto []) => {
        console.log(data);
        this.depreciacionDto = data;
        this.dataSource = new MatTableDataSource(this.depreciacionDto);
        // @ts-ignore
        this.dataSource.paginator = this.paginator;
        // @ts-ignore
        this.dataSource.sort = this.sort;




      },error: (error: any) => {
        console.log(error);
        alert('Ya se hizo la depreciacion de este mes en el año ingresado. Puede observar los datos en el historial de depreciaciones');
        window.location.href = '/lista-poweruser';


      }


    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
