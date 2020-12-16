import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
@Output () parent:EventEmitter <any> =new EventEmitter();
@Input() hero;
@Input() hero1:any[] = [];
// @Input() hero1;
  constructor() { }

  ngOnInit(): void {
    this.parent.emit("I am from child")
  }

}
