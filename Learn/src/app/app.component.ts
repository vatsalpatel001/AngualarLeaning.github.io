import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learn';
  name ='vatsal';
  a=5;
  b='10';
  ar=[5,6,8,9];
  url= window.location.href;
    get(a){
    alert(a)
  }
  mg =5;
  get1(){
    alert(this.mg)
    console.log("shdf");
  }
  myEvent(run){
    console.warn("shdf");
    console.log(run);
  }
}
 