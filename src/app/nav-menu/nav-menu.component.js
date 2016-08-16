"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var NavMenuComponent = (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent.prototype.ngOnInit = function () {
    };
    NavMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-nav-menu',
            templateUrl: 'nav-menu.component.html',
            styleUrls: ['nav-menu.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;
//# sourceMappingURL=nav-menu.component.js.map