import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-nav-menu',
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class NavMenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
