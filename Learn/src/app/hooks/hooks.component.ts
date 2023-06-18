import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css'],
})
export class HooksComponent implements OnInit {
  constructor() {
    console.log('hello', 'constructor');
    const element = document.getElementById('myElement');
    console.log(element); //null
    if (element) {
      element.innerHTML = 'New content';
    }
  }

  ngOnInit(): void {
    console.log('hello', 'ngOnInit');
    const element = document.getElementById('myElement');
    console.log(element); //div#myElement element object
    if (element) {
      element.innerHTML = 'New content';
    }
  }
}
