
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABC-Automobiles';
  cars = [
    {
      name: 'Maruti Fronx',
      image: 'assets/mf.jpg',
      mobile: '123-456-7890',
      price: 30000,
      mileage: 20
    },
    {
      name: 'Hyundai Creta N Line ',
      image: 'assets/HCL.jpg',
      mobile: '987-654-3210',
      price: 25000,
      mileage: 15
    },
    {
      name: 'Mahindra Scorpio N',
      image: 'assets/MS.jpg',
      mobile: '555-555-5555',
      price: 20000,
      mileage: 10
    }
  ];
}
