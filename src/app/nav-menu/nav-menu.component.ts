import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavMenuComponent implements OnInit {

  private loggedIn: boolean;

  constructor(private router: Router) {
    if(localStorage.getItem('authh')) {
      this.loggedIn = true;
    }
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('authh');
    this.loggedIn = false;
    this.router.navigate(['']);
  }
}
