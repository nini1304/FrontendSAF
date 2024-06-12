import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {

  @Input() valor: string | undefined;
  color: string | undefined;

  ngOnChanges() {
    this.actualizarColor();
  }

  actualizarColor() {
    switch (this.valor) {
      case 'Extremo':
        this.color = 'rojo';
        break;
      case 'Alto':
        this.color = 'naranja';
        break;
      case 'Moderado':
        this.color = 'amarillo';
        break;
      case 'Bajo':
        this.color = 'verde';
        break;
      default:
        this.color = '';
        break;
    }
  }

}
