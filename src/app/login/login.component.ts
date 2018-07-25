import { Component, OnInit, ViewChild } from '@angular/core';
import { BackendService } from '../backend.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name: string;
  password: string;
  @ViewChild('password') passwordEl;
  @ViewChild('username') usernameEl;
  message: string;

  constructor(private backend: BackendService) { }
  
  ngOnInit() {
  }

  onSubmit(){
    this.password = this.passwordEl.nativeElement.value;
    this.user_name = this.usernameEl.nativeElement.value;
    this.backend.getApiKey(this.user_name, this.password)
      .subscribe(
        (res: Response) => {
          this.message = res.json().message;
        }
      ,(err: Response) => {
        this.message = err.json().message
      }
    )
  }
}
