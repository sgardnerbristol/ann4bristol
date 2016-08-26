import { Component, OnInit } from '@angular/core';
import {ContactUsFormComponent} from "../forms/contact-us-form/contact-us-form.component";

@Component({
  moduleId: module.id,
  selector: 'app-contact-us',
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.css'],
  directives: [ContactUsFormComponent]
})
export class ContactUsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
