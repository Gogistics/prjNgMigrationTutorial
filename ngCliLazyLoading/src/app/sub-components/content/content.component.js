"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("../../../app/animations");
var customAnimations = new animations_1.Animations();
var animations_2 = require("@angular/animations");
var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () { };
    ContentComponent.prototype.doSearch = function (term) {
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'app-content',
        templateUrl: './content.component.html',
        styleUrls: ['./content.component.css'],
        animations: [
            animations_2.trigger('fadeInAnimation', [
                // route 'enter' transition
                animations_2.transition(':enter', [
                    // styles at start of transition
                    animations_2.style({ opacity: 0 }),
                    // animation and styles at end of transition
                    animations_2.animate('.3s', animations_2.style({ opacity: 1 }))
                ]),
            ])
        ],
        host: { '[@fadeInAnimation]': '' }
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map