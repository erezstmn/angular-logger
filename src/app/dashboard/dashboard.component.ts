import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { BackendService } from '../backend.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  @ViewChild('apikey') apiKeyEl;
  apiKey: string;
  logs: {}[];
  message: string = "";

  constructor(private backend: BackendService) { }

  ngOnInit(){

  }

  onShowLogs(){
    this.apiKey = this.apiKeyEl.nativeElement.value;    
    this.backend.getLogs(this.apiKey)
      .subscribe(
        (res: Response) => {
          if (res.json().logs.length===0){
            this.message = 'No logs to show';
          } else {
            this.logs= res.json().logs;
            this.message = res.json().message;
          }
        },
        (err: Response) => {
          this.message = err.json().message;
        }
      )
  }
  myFunc(){
    console.log('works');
  }

}
