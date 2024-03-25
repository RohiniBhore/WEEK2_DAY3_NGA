import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})
export class CarDetailComponent {
  @Input() car: any;

  getCardColor() {
    if (this.car.price > 25000) {
      return 'rgb(1, 194, 181)';
    } else if (this.car.price === 25000) {
      return 'rgb(127, 230, 79)';
    } else {
      return 'rgb(167, 120, 208)';
    }
  }

  getMileageColor() {
    if (this.car.mileage < 15) {
      return 'red';
    } else if (this.car.mileage === 15) {
      return 'blue';
    } else {
      return 'green';
    }
  }
}



