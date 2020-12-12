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

boxvalue;
getSet(val){
  this.boxvalue = val;
}
dis = true;
changeValue(){
  this.name="ram";
  this.dis=false;
}
show="yes";
colors='green'
data =["anil","vatsal","hitesh","ram"];

dataObj =[
  {
  name:"ram",
  age:25
},
{
  name:"vatsal",
  age:22
},
{
  name:"hitesh",
  age:30
},
]
}

let x: number = 10, y = 20;

if (x < y) 
{
    console.log('x is less than y');
} 



