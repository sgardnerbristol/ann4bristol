"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EndorsementsComponent = (function () {
    function EndorsementsComponent() {
    }
    EndorsementsComponent.prototype.ngOnInit = function () {
    };
    EndorsementsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-endorsements',
            templateUrl: 'endorsements.component.html',
            styleUrls: ['endorsements.component.css']
        })
    ], EndorsementsComponent);
    return EndorsementsComponent;
}());
exports.EndorsementsComponent = EndorsementsComponent;
//# sourceMappingURL=endorsements.component.js.map