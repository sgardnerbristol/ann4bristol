import {Component, OnInit} from "@angular/core";
import {
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private loginForm:FormGroup;
  private username: string;
  private password: string;

  private wrongCredentials: boolean;

  constructor(private formBuilder:FormBuilder, private router: Router) {
    this.wrongCredentials = false;
    this.loginForm = formBuilder.group({
        'username': ['',[
          Validators.required,
        ]],
        'password': ['', [
          Validators.required,
        ]],
    });
  }

  ngOnInit() {
  }

  validateCredentials(username: string, password: string) {
        this.username = "asgardner13@cox.net";
        this.password = "annistheworst1";

        if(this.username == username && this.password == password) {
          localStorage.setItem('authh', "TEST");
          this.wrongCredentials = false;
          this.router.navigate(['']);
        }
        else {
          this.wrongCredentials = true;
        }
      }
}
