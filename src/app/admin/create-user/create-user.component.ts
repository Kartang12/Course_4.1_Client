import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { RolesService } from 'src/app/roles.service';
import { Role } from 'src/app/Models/Role';
import { NewUser } from 'src/app/Models/NewUser';
import {HttpErrorResponse} from '@angular/common/http'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private _auth: AuthService, private _rolesService: RolesService) { }

  response:boolean = false;
  newRole: string;
  newUser: NewUser = new NewUser();
  roles: Role[];
  errorsPresent: boolean;
  errors: HttpErrorResponse;

  ngOnInit() {
    this._rolesService.getAllRoles().subscribe(
      res => {
        this.roles = res
        console.log(this.roles)
      },
      err => console.log(err)
    );
    this.newUser.business = null;
  }

  createUser() {
    this.newUser.business = null;
    this._auth.registerUser(this.newUser)
    .subscribe(
      res =>{ 
        this.response = true
      },
      err => {
        console.log(err)
        this.errors = <HttpErrorResponse>err.error.errors
        this.errorsPresent = true
      }
    )
  }
}
