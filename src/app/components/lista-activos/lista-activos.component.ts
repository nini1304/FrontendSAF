import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivosService } from '../../service/activos.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ActivoslistaDto} from "../../dto/activoslista.dto";
import {MatDialog} from "@angular/material/dialog";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";







@Component({
  selector: 'app-lista-activos',
  templateUrl: './lista-activos.component.html',
  styleUrls: ['./lista-activos.component.css']
})
export class ListaActivosComponent {
  activoslistaDto: ActivoslistaDto[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'valor', 'fecha', 'tipo', 'masinfo'];
  dataSource: MatTableDataSource<ActivoslistaDto>;

  // dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private activoservice: ActivosService, public dialog: MatDialog) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.activoslistaDto);

  }
  openDialog(descripcion: string, marca: string, calle: string, avenida: string, bloque:string, ciudad: string,personal:string, estado:string, condicion:string) : void {
    const dialogRef = this.dialog.open(MasInformacionComponent, {
      // width: '250px',
      data: {descripcion: descripcion, marca: marca, calle: calle, avenida: avenida, bloque: bloque, ciudad: ciudad, personal: personal, estado: estado, condicion: condicion}
    });

  }


  ngAfterViewInit() {
    this.activoservice.getListaActivosFijos().subscribe({
      next: (data: ActivoslistaDto []) => {
        console.log(data);
        this.activoslistaDto = data;
        this.dataSource = new MatTableDataSource(this.activoslistaDto);
        // @ts-ignore
        this.dataSource.paginator = this.paginator;
        // @ts-ignore
        this.dataSource.sort = this.sort;



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


