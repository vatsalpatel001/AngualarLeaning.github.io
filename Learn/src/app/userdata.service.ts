import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  // constructor() { }
// getUData(){
//   return{
//     name:"Vatsal",
//     age:"23"
//   }
// }

constructor(private httpt:HttpClient){}
  getAPI(){
 let url ="https://jsonplaceholder.typicode.com/todos";
 return this.httpt.get(url);
  
}

}
