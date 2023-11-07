import {Component, ViewChild} from '@angular/core';
import {ActivoslistaDto} from "../../dto/activoslista.dto";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ActivosService} from "../../service/activos.service";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";
import {DepreciarPoweruserComponent} from "../depreciar-poweruser/depreciar-poweruser.component";
import {UsuarioDto} from "../../dto/usuario.dto";

@Component({
  selector: 'app-listade-usuarios',
  templateUrl: './listade-usuarios.component.html',
  styleUrls: ['./listade-usuarios.component.css']
})
export class ListadeUsuariosComponent {
  nombre = localStorage.getItem('nombre');
  usuarioDto: UsuarioDto[] = [];

  displayedColumns: string[] = ['idUsuario', 'nombre', 'username','password', 'idRol', 'idEmpresa'];
  dataSource: MatTableDataSource<UsuarioDto>;

  // dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private activoservice: ActivosService, public dialog: MatDialog) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.usuarioDto);

  }
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }


  ngAfterViewInit() {
    this.activoservice.getUsuario().subscribe({
      next: (data: UsuarioDto[]) => {
        console.log(data);
        this.usuarioDto = data;
        this.dataSource = new MatTableDataSource(this.usuarioDto);
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
