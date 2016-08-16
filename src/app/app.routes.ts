import { provideRouter, RouterConfig } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { PhilosophyComponent } from "./philosophy/philosophy.component";
import { CredentialsComponent} from "./credentials/credentials.component";
import {EndorsementsComponent} from "./endorsements/endorsements.component";
import {EventsComponent} from "./events/events.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";


const APP_ROUTES: RouterConfig = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'philosophy', component: PhilosophyComponent },
  { path: 'credentials', component: CredentialsComponent },
  { path: 'endorsements', component: EndorsementsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

export const APP_ROUTES_PROVIDER = [
  provideRouter(APP_ROUTES)
];
