import { Injectable } from "@angular/core";
import {AngularFire} from "angularfire2/angularfire2";


import { User } from "./user.interface";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private af: AngularFire, private router: Router) {}

  signupUser(user: User) {
    this.af.auth.createUser({email: user.email, password:user.password});
  }

  signinUser(user: User) {
    return this.af.auth.login({email: user.email, password: user.password});
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    var user = this.af.auth.getAuth();

    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
