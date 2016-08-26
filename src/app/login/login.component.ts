import { Component, OnInit } from '@angular/core';
import {LoginFormComponent} from "../forms/login-form/login-form.component";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [LoginFormComponent]
})
export class LoginComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
