import { NgModule, provide }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent }   from './app.component';
import {LoginComponent} from "./login/login.component";
import { routing }      from './app.routes';
import { HttpModule }       from '@angular/http';
import { AngularFireModule} from "angularfire2/angularfire2";
import {AboutComponent} from "./about/about.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {CredentialsComponent} from "./credentials/credentials.component";
import {EndorsementsComponent} from "./endorsements/endorsements.component";
import {EventsComponent} from "./events/events.component";
import {FooterComponent} from "./footer/footer.component";
import {ContactUsFormComponent} from "./forms/contact-us-form/contact-us-form.component";
import {LoginFormComponent} from "./forms/login-form/login-form.component";
import {HeaderComponent} from "./header/header.component";
import {HeaderBannerComponent} from "./header-banner/header-banner.component";
import {NavMenuComponent} from "./nav-menu/nav-menu.component";
import {PhilosophyComponent} from "./philosophy/philosophy.component";



// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDBbLmvN0ElWe8LH7AXOqKLC202Q870UZ8",
  authDomain: "ann4bristol.firebaseapp.com",
  databaseURL: "https://ann4bristol.firebaseio.com",
  storageBucket: "ann4bristol.appspot.com",
};


@NgModule({
  declarations: [AppComponent, LoginComponent, AboutComponent, ContactUsComponent, CredentialsComponent, EndorsementsComponent, EventsComponent, FooterComponent,
                ContactUsFormComponent, LoginFormComponent, HeaderComponent, HeaderBannerComponent, NavMenuComponent, PhilosophyComponent],
  imports:      [BrowserModule, ReactiveFormsModule, HttpModule, FormsModule, routing, AngularFireModule.initializeApp(firebaseConfig)],
  bootstrap:    [AppComponent],
})
export class AppModule {}
