import { Component, OnInit } from '@angular/core';

@Component({
  selector: '    ',
  template: `
  <h2>Date Pipe</h2>
  <p>Formatted Date: {{ currentDate | date: 'dd/MM/yyyy' }}</p>
  
  <h2>Decimal Pipe</h2>
  <p>Formatted Number: {{ price | number: '1.2-2' }}</p>
  
  <h2>Currency Pipe</h2>
  <p>Formatted Currency: {{ totalAmount | currency: 'USD':'symbol':'1.2-2' }}</p>
  
  <h2>Lowercase Pipe</h2>
  <p>Lowercase String: {{ text | lowercase }}</p>
  
  <h2>Uppercase Pipe</h2>
  <p>Uppercase String: {{ text | uppercase }}</p>
  
  <h2>Percent Pipe</h2>
  <p>Formatted Percent: {{ successRate | percent: '2.0-0' }}</p>
  
  <h2>Slice Pipe</h2>
  <p>Sliced Array: {{ numbers | slice: 1:4 }}</p>
  
  <h2>Titlecase Pipe</h2>
  <p>Titlecased String: {{ title | titlecase }}</p>
  
  <h2>Json Pipe</h2>
  <p>JSON String: {{ object | json }}</p>
  
  <h2>KeyValue Pipe</h2>
  <ul>
    <li *ngFor="let entry of object | keyvalue">{{ entry.key }}: {{ entry.value }}</li>
  </ul>
  
 
`
})
export class PipesExamplesComponent implements OnInit {
  currentDate = new Date();
  price = 19.99;
  totalAmount = 1000;
  text = 'Hello, world!';
  successRate = 0.75;
  numbers = [1, 2, 3, 4, 5];
  title = 'sample title';
  object = { name: 'John', age: 25 };
  constructor() { }

  ngOnInit(): void {
  }

}
