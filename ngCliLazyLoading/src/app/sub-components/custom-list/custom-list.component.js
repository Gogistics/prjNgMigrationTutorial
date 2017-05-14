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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var animations_1 = require("../../../app/animations");
var customAnimations = new animations_1.Animations();
var animations_2 = require("@angular/animations");
var CustomListComponent = (function () {
    function CustomListComponent(http) {
        this.http = http;
    }
    CustomListComponent.prototype.ngOnInit = function () {
        var resp = this.http.get('/api').map(function (res) { return res.json(); });
        console.log(resp);
    };
    return CustomListComponent;
}());
CustomListComponent = __decorate([
    core_1.Component({
        moduleId: module.id.toString(),
        selector: 'app-custom-list',
        templateUrl: './custom-list.component.html',
        styleUrls: ['./custom-list.component.css'],
        animations: [
            animations_2.trigger('slideInOutAnimation', [
                // end state styles for route container (host)
                animations_2.state('*', animations_2.style({
                    // the view covers the whole screen with a semi tranparent background
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)'
                })),
                // route 'enter' transition
                animations_2.transition(':enter', [
                    // styles at start of transition
                    animations_2.style({
                        // start with the content positioned off the right of the screen, 
                        // -400% is required instead of -100% because the negative position adds to the width of the element
                        right: '-400%',
                        // start with background opacity set to 0 (invisible)
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }),
                    // animation and styles at end of transition
                    animations_2.animate('.5s ease-in-out', animations_2.style({
                        // transition the right position to 0 which slides the content into view
                        right: 0,
                        // transition the background opacity to 0.8 to fade it in
                        backgroundColor: 'rgba(0, 0, 0, 0.8)'
                    }))
                ]),
                // route 'leave' transition
                animations_2.transition(':leave', [
                    // animation and styles at end of transition
                    animations_2.animate('.5s ease-in-out', animations_2.style({
                        // transition the right position to -400% which slides the content out of view
                        right: '-400%',
                        // transition the background opacity to 0 to fade it out
                        backgroundColor: 'rgba(0, 0, 0, 0)'
                    }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], CustomListComponent);
exports.CustomListComponent = CustomListComponent;
//# sourceMappingURL=custom-list.component.js.map