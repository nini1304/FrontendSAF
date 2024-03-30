import {Component, ViewChild} from '@angular/core';
import {RolDto} from "../../dto/rol.dto";
import {MatTableDataSource} from "@angular/material/table";
import {RolesService} from "../../service/roles.service";
import {ActivoslistaDto} from "../../dto/activoslista.dto";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MasInformacionComponent} from "../mas-informacion/mas-informacion.component";
import {CrearRolComponent} from "../crear-rol/crear-rol.component";

@Component({
  selector: 'app-gestionar-roles',
  templateUrl: './gestionar-roles.component.html',
  styleUrls: ['./gestionar-roles.component.css']
})
export class GestionarRolesComponent {
  rolDto: RolDto[] = [];
  displayedColumns: string[] = ['ID', 'Rol','Acciones'];
  dataSource: MatTableDataSource<RolDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private rolesService: RolesService,private router: Router,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.rolDto);
  }

  ngAfterViewInit() {
    this.rolesService.obtenerRoles().subscribe({
      next: (data: RolDto []) => {
        console.log(data);
        this.rolDto = data;
        this.dataSource = new MatTableDataSource(this.rolDto);
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
  }

  abrirListaUsuarios() {

    this.router.navigate(['/listade-usuarios']);

  }

  borrarRol(id: number){
    console.log(id);
    this.rolesService.borrarRol(id).subscribe({
      next: (data) => {
        console.log(data);
        alert('Rol eliminado correctamente');
        location.reload();


      },error: (error: any) => {
        console.log(error);
        alert('Error al eliminar rol');


      }

    });

  }

  agregarRol(){

    const dialogRef = this.dialog.open(CrearRolComponent, {
        // width: '250px',
        // data: {descripcion: descripcion, marca: marca, calle: calle, avenida: avenida, bloque: bloque, ciudad: ciudad, personal: personal, estado: estado, condicion: condicion}
      });

    }


}
