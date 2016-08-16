"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var philosophy_component_1 = require("./philosophy/philosophy.component");
var credentials_component_1 = require("./credentials/credentials.component");
var endorsements_component_1 = require("./endorsements/endorsements.component");
var events_component_1 = require("./events/events.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var APP_ROUTES = [
    { path: '', component: about_component_1.AboutComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'philosophy', component: philosophy_component_1.PhilosophyComponent },
    { path: 'credentials', component: credentials_component_1.CredentialsComponent },
    { path: 'endorsements', component: endorsements_component_1.EndorsementsComponent },
    { path: 'events', component: events_component_1.EventsComponent },
    { path: 'contact-us', component: contact_us_component_1.ContactUsComponent },
];
exports.APP_ROUTES_PROVIDER = [
    router_1.provideRouter(APP_ROUTES)
];
//# sourceMappingURL=app.routes.js.map