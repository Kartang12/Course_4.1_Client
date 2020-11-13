import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  route:String = "/login"
  loginUserData = {
    email: "",
    password: ""
  }
  constructor(private _auth: AuthService, private router:Router){}

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => { 
        localStorage.setItem('token', res.token)
        localStorage.setItem('role', res.role)
        localStorage.setItem('name', this.loginUserData.email)
        if(res.role == "User")
          this.route = "/home/"
        if(res.role == "Admin")
          this.route = "/Admin/CreateUser"
          this.router.navigate([this.route])
      },
      err => console.log(err)
    )
  }
}
