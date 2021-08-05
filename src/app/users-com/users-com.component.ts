import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-com',
  templateUrl: './users-com.component.html',
  styleUrls: ['./users-com.component.css']
})
export class UsersComComponent implements OnInit {

// @Input() hero;
@Input() userData2;
@Output() parentComponent:EventEmitter<any>=new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    // console.warn(this.hero)
    //this.parentComponent.emit("Hello")
    //this.parentComponent.emit({name:'anil',age:30})
  }
  sendData()
  {
    let item={name:'anil',age:30};
    this.parentComponent.emit(item);
  }

}
