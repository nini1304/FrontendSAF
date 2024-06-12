import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {ModalSemaforoComponent} from "../modal-semaforo/modal-semaforo.component";
import {ModalCrearrComponent} from "../modal-crearr/modal-crearr.component";
import {ResponseLRDto} from "../../dto/ResponseLR.dto";
import {RiesgosService} from "../../service/riesgos.service";


@Component({
  selector: 'app-riesgos-poweruser',
  templateUrl: './riesgos-poweruser.component.html',
  styleUrls: ['./riesgos-poweruser.component.css'],
})
export class RiesgosPoweruserComponent {


  nombre = localStorage.getItem('nombre');
  responseLRDto: ResponseLRDto[] = [];

  displayedColumns: string[] = ['id','ai', 'av', 'consecuencia', 'probabilidad1','impacto1','ri','nr','tratamiento','ci','tipo','nivel','frecuencia','probabilidad2','impacto2','rr','nrr','estado'];
  dataSource: MatTableDataSource<ResponseLRDto>;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(public dialog: MatDialog, private service : RiesgosService) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.responseLRDto);
  }

  ngAfterViewInit() {
    this.service.listarRiesgos().subscribe({

      next: (data:ResponseLRDto[] ) => {
        this.responseLRDto= data;
        this.dataSource = new MatTableDataSource(this.responseLRDto);
        // @ts-ignore
        this.dataSource.paginator = this.paginator;
        // @ts-ignore
        this.dataSource.sort = this.sort;

      }


    })


  }
  borrarls(){
    localStorage.clear();
    if (localStorage.length === 0) {
      console.log("LocalStorage ha sido limpiado correctamente.");
    } else {
      console.log("No se pudo limpiar el LocalStorage.");
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog( nivelR : string,  nivelRR: string) : void {
    const dialogRef = this.dialog.open(ModalSemaforoComponent, {
      data: { nivelR : nivelR, nivelRR : nivelRR}


    });

  }

  openDialog2() : void {

    const dialogRef = this.dialog.open(ModalCrearrComponent, {

    });

  }

  validarCampo(valorCampo: string): string {
    switch (valorCampo) {
      case 'Moderado':
        return 'yellow';
      case 'Alto':
        return 'orange';
      case 'Extremo':
        return 'red';
      case 'Bajo':
        return 'green';
      default:
        return '';
    }
  }
}







