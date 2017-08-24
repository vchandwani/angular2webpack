import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  cars = [];

  cols: any[];

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
    this.cars = [
      {
        "vin": "212",
        "year": "2012",
        "brand": "As",
        "color": "red"
      },{
        "vin": "212",
        "year": "2012",
        "brand": "As",
        "color": "red"
      },{
        "vin": "212",
        "year": "2012",
        "brand": "As",
        "color": "red"
      },{
        "vin": "212",
        "year": "2012",
        "brand": "As",
        "color": "red"
      }
    ];
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

}
