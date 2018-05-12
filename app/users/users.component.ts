import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DataService } from '../data.service';


//import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
//users = [];
//@Input('users') users: Array = [];
constructor(private _dataService: DataService){}
@Input() users: Array<any>;
@Output() onShowUser = new EventEmitter<any>();

showPerson(data : Object) {
   // console.log('data',data);
   
  this._dataService.userChanges.next(data);
  }

}
