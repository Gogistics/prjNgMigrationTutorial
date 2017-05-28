"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var custom_list_module_1 = require("./sub-components/custom-list/custom-list.module");
var sibling_module_1 = require("./sibling/sibling.module");
var messages_fr_1 = require("../i18n/messages.fr");
var MigrationHandler = (function () {
    function MigrationHandler() {
    }
    // bootstrap modules
    MigrationHandler.prototype.bootstrapNgComponent = function (module) {
        // CustomListModule is declared in app.module.ts
        // SiblingModule is 
        var moduleDict = {
            listElem: custom_list_module_1.CustomListModule,
            siblingElem: sibling_module_1.SiblingModule
        };
        var selectedModule = moduleDict[module];
        platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(selectedModule, { providers: [
                { provide: core_1.TRANSLATIONS, useValue: messages_fr_1.TRANSLATION },
                { provide: core_1.TRANSLATIONS_FORMAT, useValue: 'xlf' },
                { provide: core_1.LOCALE_ID, useValue: 'fr' }
            ] });
    };
    return MigrationHandler;
}());
exports.MigrationHandler = MigrationHandler;
//# sourceMappingURL=migration-handler.js.map