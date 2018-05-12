import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

 userChanges = new Subject<any>();
 profileChanges = new Subject<any>();
  constructor(private http: Http) {}
  
  getJSON() {
    return this.http.get("../assets/people.json")
                    .map((res:Response) => {return res.json()})
                    //.catch((error:any) => console.log(error));

}

onUserChange(user){
   this.userChanges.next(user);
}

onProfileChanges(user){
  this.profileChanges.next(user);
}

}
