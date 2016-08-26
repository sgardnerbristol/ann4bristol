import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-endorsements',
  templateUrl: 'endorsements.component.html',
  styleUrls: ['endorsements.component.css']
})
export class EndorsementsComponent implements OnInit {

  private protectedResource: string;

  constructor() {
    if(localStorage.getItem('authh')) {
      this.protectedResource = "CAN YOU SEE ME?";
    }
  }

  ngOnInit() {
  }

}
