import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-semaforo',
  templateUrl: './modal-semaforo.component.html',
  styleUrls: ['./modal-semaforo.component.css']
})
export class ModalSemaforoComponent {
  currentValue: number = 0;

  changeValue(value: number) {
    this.currentValue = value;
  }

}
