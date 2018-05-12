import { Component,OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  profile: any;
  
  users = [];
  obj = [];


  constructor(private http: Http, private _dataService: DataService) {
    this.getJSON().subscribe(data => this.users = data.People);
    
  }

  ngOnInit() {
   
  //  console.log('component initialized');
    this.getJSON().subscribe(data => this.obj = data.People);
    this._dataService.profileChanges.subscribe(data => this.profile = data)
  }
  
  public getJSON(): Observable<any> {
    return this.http.get("../assets/people.json")
                    .map((res:any) => res.json())
                    //.catch((error:any) => console.log(error));
  
  }

  // ngAfterViewInit() {
  //   this.getJSON().subscribe(data => {this.obj = data;});
    
  //   console.log(this.obj);
  // }
  profilePerson(data) {
    console.log('profile part',data);
    this._dataService.userChanges.next(data);
  }
  search(value){
         console.log(value);
// let ab = this.users.filter(e => e.name ===value);
//        console.log(ab);
//console.log(this.users.indexOf(value))
if(value.length>1){
this.users.forEach(e => {
  console.log(e.name);
  let name = e.name;
  if(name.includes(value)){
    
    
    console.log('name present', e.name);
  }
})
}

  }

  onChange(value){
    console.log('Value',value);
  }
}
