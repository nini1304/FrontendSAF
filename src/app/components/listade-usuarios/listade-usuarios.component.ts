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
import { UsuarioListaDto } from 'src/app/dto/usuarioLista.dto';
import {ActualizarUsuarioComponent} from "../actualizar-usuario/actualizar-usuario.component";

@Component({
  selector: 'app-listade-usuarios',
  templateUrl: './listade-usuarios.component.html',
  styleUrls: ['./listade-usuarios.component.css']
})
export class ListadeUsuariosComponent {
  nombre = localStorage.getItem('nombre');
  usuariolistaDto: UsuarioListaDto[] = [];

  displayedColumns: string[] = ['idUsuario', 'nombre', 'username', 'idRol','acciones'];
  dataSource: MatTableDataSource<UsuarioListaDto>;

  // dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private activoservice: ActivosService, public dialog: MatDialog, private router: Router) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.usuariolistaDto);

  }
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }
  eliminar(id: number) {
    this.activoservice.deleteUsuario(id).subscribe({
      next: (data) => {
        console.log(data);
        alert('Estado de usuario cambiado correctamente');
        location.reload();


      },error: (error: any) => {
        console.log(error);
        alert('Error al cambiar estado de usuario');


      }

    });
  }

  actualizar(id: number) {
    console.log(id)
    this.router.navigate(['/actualizar-usuario', id]);
  }


  ngAfterViewInit() {
    const idEmpresa = localStorage.getItem('idempresa');
    const idemp = parseInt(idEmpresa!);
    this.activoservice.getListaUsuario(idemp).subscribe({
      next: (data: UsuarioListaDto []) => {
        console.log(data);
        this.usuariolistaDto = data;
        this.dataSource = new MatTableDataSource(this.usuariolistaDto);
        this.dataSource.paginator = this.paginator!;
        this.dataSource.sort = this.sort!;
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
