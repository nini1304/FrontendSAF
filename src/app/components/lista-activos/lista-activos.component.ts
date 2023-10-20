import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivosService } from '../../service/activos.service';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ActivoslistaDto} from "../../dto/activoslista.dto";







@Component({
  selector: 'app-lista-activos',
  templateUrl: './lista-activos.component.html',
  styleUrls: ['./lista-activos.component.css']
})
export class ListaActivosComponent {
  activoslistaDto: ActivoslistaDto[] = [];

  displayedColumns: string[] = ['id', 'nombre', 'valor', 'fecha', 'descripcion', 'tipo', 'marca', 'ubicacion', 'personal', 'estado', 'condicion'];
  dataSource: MatTableDataSource<ActivoslistaDto>;

  // dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private activoservice: ActivosService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.activoslistaDto);

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

/** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';
//
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
//
//
//
//
//
//
// }
