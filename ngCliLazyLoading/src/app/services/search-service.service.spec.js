"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var search_service_service_1 = require("./search-service.service");
describe('SearchServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [search_service_service_1.SearchServiceService]
        });
    });
    it('should ...', testing_1.inject([search_service_service_1.SearchServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=search-service.service.spec.js.map