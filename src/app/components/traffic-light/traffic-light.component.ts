import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.css']
})
export class TrafficLightComponent {

  @Input() value: number = 0;
  state: 'red' | 'green' | 'orange' = 'red';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.updateState(this.value);
    }
  }

  updateState(value: number) {
    if (value === 5) {
      this.state = 'red';
    } else if (value === 2) {
      this.state = 'green';
    } else {
      this.state = 'orange'; // Puedes agregar más condiciones según tu necesidad
    }
  }

}
