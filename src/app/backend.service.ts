import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: Http) { }

  getApiKey(user_name: string, password: string){
    return this.http.post('http://18.185.120.246/login', {user_name, password});
  }
  getLogs(api_key: string){
    return this.http.get('http://18.185.120.246/get_logs?api_key='+api_key);
  }  
}
