import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent implements OnInit {
	private footerDate = new Date();

  constructor() {}

  ngOnInit() {
  }
  goToTop(event){
	  window.scrollTo(0,0);
  }

}
