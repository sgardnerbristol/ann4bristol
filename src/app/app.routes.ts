import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { PhilosophyComponent } from "./philosophy/philosophy.component";
import { CredentialsComponent} from "./credentials/credentials.component";
import {EndorsementsComponent} from "./endorsements/endorsements.component";
import {EventsComponent} from "./events/events.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {LoginComponent} from "./login/login.component";
import {AddEndorsementComponent} from "./add-endorsement/add-endorsement.component";
import {AddEventComponent} from "./add-event/add-event.component";


const APP_ROUTES: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'philosophy', component: PhilosophyComponent },
  { path: 'credentials', component: CredentialsComponent },
  { path: 'endorsements', component: EndorsementsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-endorsement', component: AddEndorsementComponent },
  { path: 'add-event', component: AddEventComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);

