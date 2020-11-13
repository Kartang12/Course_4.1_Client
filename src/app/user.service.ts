import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './Models/UserData';

import {HttpResponseBase} from '@angular/common/http'
import { Port } from './Models/Port';
import { UserChangePassword } from './Models/UserChangePassword';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  port:Port = new Port();
  private _allUsersUrl = "https://localhost:"+this.port.port+"/api/v1/users"
  private _specialUserUrl = "https://localhost:"+this.port.port+"/api/v1/user/"
  private _updateUserUrl = "https://localhost:"+this.port.port+"/api/v1/user/"
  private _deleteUserUrl = "https://localhost:"+this.port.port+"/api/v1/user/"
  private _changeMeUrl = "https://localhost:"+this.port.port+"/api/v1/userData/"
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(this._allUsersUrl)
  }

  getUser(name){
    return this.http.get<any>(this._specialUserUrl+name)
  }

  updateUser(name, user:UserData){
    const body = { name: user.Name, role: user.Role, business: user.BusinessType }
    return this.http.put<HttpResponseBase>(this._updateUserUrl + name, body)
  }

  deleteUser(name){
    return this.http.delete<HttpResponseBase>(this._deleteUserUrl + name)
  }

  changeMe(username:string, data:UserChangePassword){
    return this.http.put<any>(this._changeMeUrl + username, data)
  }
}
