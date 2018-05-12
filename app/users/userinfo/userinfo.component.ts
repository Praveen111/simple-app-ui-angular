import { Component, OnInit, AfterViewInit, AfterViewChecked, DoCheck } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

 
  constructor(private _dataService: DataService) { }
  user='';
  starList;
  

  ngOnInit() {
    this._dataService.userChanges.subscribe(data => {
      this.user = data;
      if(this.user!== undefined){
        this.getStar(this.user);
      }
      
    });

    
  }


 private getStar(data:any){
   
   this.starList= [];  
  if(data.rating!== undefined){

  
  if(data.rating == 5){
    this.starList = [true,true,true,true,true];
   
  } else {


    for(let i=0; i<=4;i++){

      if(i<data.rating){
        this.starList[i]=true; 
      } else {
        this.starList[i]= false;
      }
    }
  
   } 
 
  }        
   
  }
 


} 


