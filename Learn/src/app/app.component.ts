import { Component } from '@angular/core';
import {UserdataService} from './userdata.service'

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

getFormValue(value){
  console.log(value)
  console.log(value.address)
}
colr ="green";
err =true;
updateclr(){
  this.err = !this.err;
  this.colr="red"
}
val ="";
parentCompo(val1){
  console.log(val1)
  this.val=val1;
}
samay =Date.now()

constructor(private user:UserdataService)
{
  console.log(this.user.getUData());
}

}

let x: number = 10, y = 20;

if (x < y) 
{
    console.log('x is less than y');
} 



  