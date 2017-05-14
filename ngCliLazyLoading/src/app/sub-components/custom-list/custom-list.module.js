"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var custom_list_component_1 = require("./custom-list.component");
var CustomListModule = (function () {
    function CustomListModule() {
    }
    return CustomListModule;
}());
CustomListModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            common_1.CommonModule,
            http_1.HttpModule
        ],
        declarations: [custom_list_component_1.CustomListComponent],
        bootstrap: [custom_list_component_1.CustomListComponent]
    })
], CustomListModule);
exports.CustomListModule = CustomListModule;
//# sourceMappingURL=custom-list.module.js.map